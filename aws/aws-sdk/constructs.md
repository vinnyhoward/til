# Constructs

Constructs are the basic building blocks of AWS CDK apps. A construct represents a "cloud component" and encapsulates everything AWS CloudFormation needs to create the component.

A construct can represent a single resource, such as an Amazon Simple Storage Service (Amazon S3) bucket, or it can represent a higher-level component consisting of multiple AWS resources. Examples of such components include a worker queue with its associated compute capacity, a cron job with monitoring resources and a dashboard, or even an entire app spanning multiple AWS accounts and regions.

## AWS Construct library

The AWS CDK includes the AWS Construct Library, which contains constructs representing AWS resources.

This library includes constructs that represent all the resources available on AWS. For example, the `s3.Bucket` class represents an Amazon S3 bucket, and the `dynamodb.Table` class represents an Amazon DynamoDB table.

There are three different levels of constructs in this library, beginning with low-level constructs, which we call `CFN` Resources (or `L1`, short for "level 1") or `Cfn` (short for `CloudFormation`) resources. These constructs directly represent all resources available in AWS CloudFormation. `CFN` Resources are periodically generated from the AWS CloudFormation Resource Specification. They are named `CfnXyz`, where `Xyz` is name of the resource. For example, `CfnBucket` represents the `AWS::S3::Bucket` AWS CloudFormation resource. When you use `Cfn` resources, you must explicitly configure all resource properties, which requires a complete understanding of the details of the underlying AWS CloudFormation resource model.

The next level of constructs, `L2`, also represent AWS resources, but with a higher-level, intent-based API. They provide similar functionality, but provide the defaults, boilerplate, and glue logic you'd be writing yourself with a `CFN` Resource construct. AWS constructs offer convenient defaults and reduce the need to know all the details about the AWS resources they represent, while providing convenience methods that make it simpler to work with the resource. For example, the `s3.Bucket` class represents an Amazon S3 bucket with additional properties and methods, such as `bucket.addLifeCycleRule()`, which adds a lifecycle rule to the bucket.

Finally, the AWS Construct Library includes even higher-level constructs, which we call patterns. These constructs are designed to help you complete common tasks in AWS, often involving multiple kinds of resources. For example, the `aws-ecs-patterns.ApplicationLoadBalancedFargateService` construct represents an architecture that includes an AWS Fargate container cluster employing an Application Load Balancer (ALB). The `aws-apigateway.LambdaRestApi` construct represents an Amazon API Gateway API that's backed by an AWS Lambda function.

For more information about how to navigate the library and discover constructs that can help you build your apps, see the API Reference.

## Constructs and Constructors

As you can see, the class constructors of both `CdkWorkshopStack` and `lambda.Function` (and many other classes in the CDK) have the signature `(scope, id, props)`. This is because all of these classes are constructs. Constructs are the basic building block of CDK apps. They represent abstract “cloud components” which can be composed together into higher level abstractions via scopes. Scopes can include constructs, which in turn can include other constructs, etc.

Constructs are always created in the scope of another construct and must always have an identifier which must be unique within the scope it’s created. Therefore, construct initializers (constructors) will always have the following signature:

1. `scope:` the first argument is always the scope in which this construct is created. In almost all cases, you’ll be defining constructs within the scope of current construct, which means you’ll usually just want to pass this for the first argument. Make a habit out of it.

2. `id:` the second argument is the local identity of the construct. It’s an ID that has to be unique amongst construct within the same scope. The CDK uses this identity to calculate the CloudFormation Logical ID for each resource defined within this scope. To read more about IDs in the CDK, see the CDK user manual.

3. `props:` the last (sometimes optional) argument is always a set of initialization properties. Those are specific to each construct. For example, the `lambda.Function` construct accepts properties like runtime, code and handler. You can explore the various options using your IDE’s auto-complete or in the online documentation.