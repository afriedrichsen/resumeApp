FROM mhart/alpine-node:latest
# FROM node:latest
# FROM node:12.10.0-buster-slim

ENV NODE_ENV=production_docker
ENV DOCKER_FLAG=true
ENV PORT=2112
ENV RESUME_APP_CONFIG_DIR=/deploy/resume/config

WORKDIR /app

ADD . /app


RUN cd /app; npm install --production

EXPOSE 2112

CMD [ "npm","start"]