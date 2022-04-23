#!/bin/sh
docker-compose up -d
sleep 2 
docker exec mongo mongo admin ./setup/create-admin.js
