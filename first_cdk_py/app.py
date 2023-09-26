#!/usr/bin/env python3

import aws_cdk as cdk

from first_cdk_py.first_cdk_py_stack import FirstCdkPyStack


app = cdk.App()
FirstCdkPyStack(app, "FirstCdkPyStack")

app.synth()
