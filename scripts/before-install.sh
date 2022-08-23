#!/bin/bash

# This script is executed before installing the application.
echo "this will run before installing the application"

DIR="/home/ec2-user/app"
if [ -d "$DIR" ]; then
  echo "directory exists"
else
  echo "directory does not exist"
  mkdir ${DIR}
fi