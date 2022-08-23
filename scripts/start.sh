#!/bin/bash

cd /home/ec2-user/app
sudo pm2 start server.js --name "server"
