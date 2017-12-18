#!/usr/bin/env bash
docker rmi -f $(docker images -a -q)

#Rebuild docker container for application.
docker run -d -p 2112:2112 afriedrichsen/core-projects:resumejs