import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3'

export class FirstCdkTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      new s3.Bucket(this, 'My-Bucket',{
        autoDeleteObjects: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY
      })
  }
}
