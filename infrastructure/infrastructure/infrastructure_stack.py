from aws_cdk import CfnOutput, RemovalPolicy, Stack
from aws_cdk import aws_certificatemanager as acm  # Duration,
from aws_cdk import aws_cloudfront as cloudfront
from aws_cdk import aws_cloudfront_origins as origins
from aws_cdk import aws_route53 as route53
from aws_cdk import aws_route53_targets as route53_targets
from aws_cdk import aws_s3 as s3
from constructs import Construct

from utils.get_context import try_get_context


class ResumeAppStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        target_host = try_get_context(self, "host")
        target_zone = try_get_context(self, "zone")
        target_domain = try_get_context(self, "domain")
        target_domain_record = f"{target_host}.{target_domain}"

        domain = route53.HostedZone.from_hosted_zone_attributes(
            self,
            "HostedZone",
            hosted_zone_id=target_zone,
            zone_name=f"{target_domain}",
        )

        # Basic infrastructure declaration.
        bucket = s3.Bucket(
            self, "ResumeAssetBucket", removal_policy=RemovalPolicy.DESTROY
        )

        certificate = acm.Certificate(
            self,
            "Certificate",
            domain_name=target_domain_record,
            certificate_name="Resume App Service",  # Optionally provide an certificate name
            validation=acm.CertificateValidation.from_dns(domain),
        )

        oai = cloudfront.OriginAccessIdentity(
            self, "ResumeApp-OAI", comment="ResumeApp OAI for the S3 Website"
        )

        distribution = cloudfront.Distribution(
            self,
            "ResumeCDN",
            default_root_object="index.html",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(bucket, origin_access_identity=oai, origin_path=try_get_context(self, "deployment_path")),
                origin_request_policy=cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                response_headers_policy=cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                cache_policy=cloudfront.CachePolicy.CACHING_OPTIMIZED,
                allowed_methods=cloudfront.AllowedMethods.ALLOW_ALL,
            ),
            certificate=certificate,
            domain_names=[target_domain_record],
        )

        # DNS
        a_record = route53.ARecord(
            self,
            "ResumeDomainRecord",
            zone=domain,
            delete_existing=True,
            record_name=f"{target_host}",
            target=route53.RecordTarget.from_alias(
                route53_targets.CloudFrontTarget(distribution=distribution)
            ),
        )

        # Outputs.
        CfnOutput(self, "DeployBucket", value=bucket.bucket_name)
