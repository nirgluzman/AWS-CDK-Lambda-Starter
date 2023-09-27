import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';

export class FirstCdkTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const testLambda = new NodejsFunction(this, 'TestLambda', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'handler',
      entry: join(__dirname, 'handler.js')
    })

  }
}
