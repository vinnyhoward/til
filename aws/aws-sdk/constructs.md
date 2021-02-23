# Constructs

Constructs are the basic building blocks of AWS CDK apps. A construct represents a "cloud component" and encapsulates everything AWS CloudFormation needs to create the component.

A construct can represent a single resource, such as an Amazon Simple Storage Service (Amazon S3) bucket, or it can represent a higher-level component consisting of multiple AWS resources. Examples of such components include a worker queue with its associated compute capacity, a cron job with monitoring resources and a dashboard, or even an entire app spanning multiple AWS accounts and regions.

## Constructs and Constructors

As you can see, the class constructors of both `CdkWorkshopStack` and `lambda.Function` (and many other classes in the CDK) have the signature `(scope, id, props)`. This is because all of these classes are constructs. Constructs are the basic building block of CDK apps. They represent abstract “cloud components” which can be composed together into higher level abstractions via scopes. Scopes can include constructs, which in turn can include other constructs, etc.

Constructs are always created in the scope of another construct and must always have an identifier which must be unique within the scope it’s created. Therefore, construct initializers (constructors) will always have the following signature:

1. `scope:` the first argument is always the scope in which this construct is created. In almost all cases, you’ll be defining constructs within the scope of current construct, which means you’ll usually just want to pass this for the first argument. Make a habit out of it.

2. `id:` the second argument is the local identity of the construct. It’s an ID that has to be unique amongst construct within the same scope. The CDK uses this identity to calculate the CloudFormation Logical ID for each resource defined within this scope. To read more about IDs in the CDK, see the CDK user manual.

3. `props:` the last (sometimes optional) argument is always a set of initialization properties. Those are specific to each construct. For example, the `lambda.Function` construct accepts properties like runtime, code and handler. You can explore the various options using your IDE’s auto-complete or in the online documentation.