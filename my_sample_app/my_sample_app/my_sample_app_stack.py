from aws_cdk import (
    Stack,
    aws_ec2 as ec2
)
from constructs import Construct

class MySampleAppStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        my_vpc = ec2.CfnVPC(self, 'MyVpc',
                            cidr_block='10.0.0.0/16',
                            enable_dns_hostnames=True,
                            enable_dns_support=True)
        
        internet_gateway = ec2.CfnInternetGateway(self, 'InternetGateway')

        ec2.CfnVPCGatewayAttachment(self, 'IgwAttachment', 
                                    vpc_id=my_vpc.attr_vpc_id,
                                    internet_gateway_id=internet_gateway.attr_internet_gateway_id)