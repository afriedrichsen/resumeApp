package util

import (
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

type resume struct {
	ID          string `json:"id,omitempty"`
	UserName    string `json:"user_name,omitempty"`
	SocialMedia string `json:"socialmedia,omitempty"`
	Sections    string `json:"sections,omitempty"`
}

type Service interface {
	GetResumeData() (result resume, err error)
}

type DynamoClient struct {
	config aws.Config
}

//InitializeAndFetchConfig is a function that determines how to initial and configure the function.
func InitializeAndFetchConfig() (result *aws.Config) {
	var config *aws.Config

	if os.Getenv("APP_ENV") == "local-dev" {
		config = &aws.Config{
			Region:   aws.String(os.Getenv("RESUME_DB_REGION")),
			Endpoint: aws.String(os.Getenv("RESUME_DB_HOST")),
		}
	} else {
		config = &aws.Config{
			Region: aws.String(os.Getenv("RESUME_DB_REGION")),
		}
	}

	return config
}

// GetResumeData function to get resume data from DynamoDB.
func (DynamoClient) GetResumeData() (results *resume, err error) {
	sess, awsSessionError := session.NewSession(InitializeAndFetchConfig())

	if awsSessionError != nil {
		return nil, awsSessionError
	}

	svc := dynamodb.New(sess)

	scanReq := &dynamodb.ScanInput{
		TableName: aws.String("friedrichsen-resume"),
	}

	data, databaseError := svc.Scan(scanReq)

	if databaseError != nil {
		return nil, databaseError
	}

	obj := []resume{}

	conversionError := dynamodbattribute.UnmarshalListOfMaps(data.Items, &obj)

	if conversionError != nil {
		return nil, conversionError
	}

	results = &obj[0]

	return results, nil
}
