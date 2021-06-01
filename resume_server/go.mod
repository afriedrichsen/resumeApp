module github.com/resumeApp/resume_server

go 1.16

require (
	github.com/aws/aws-lambda-go v1.24.0
	github.com/aws/aws-sdk-go v1.38.51 // indirect
	github.com/resumeApp/resume_server/server/util v0.0.0-00010101000000-000000000000 // indirect
)

replace github.com/resumeApp/resume_server/server/util => ./server/util
