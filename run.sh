#!/bin/sh

docker-compose up -d
cd tracking-ui
npm start dev
#docker build --no-cache -t ui .

#cd ..
