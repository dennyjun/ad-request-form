#!/bin/bash
cd /home/denny/ad-request-form
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
sudo yum -y install nodejs