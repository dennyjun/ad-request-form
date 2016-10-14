#!/bin/bash
cd /home/ec2-user/ad-request-form
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
sudo yum -y install nodejs
sudo yum install gcc-c++ make
npm install
node_modules/pm2/bin/pm2 install coffeescript