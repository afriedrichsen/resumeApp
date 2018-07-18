FROM node:alpine

MAINTAINER Alex Friedrichsen <afriedrichsen@me.com>

ENV NODE_ENV=production_docker
ENV DOCKER_FLAG=true
ENV PORT=2112
ENV RESUME_APP_CONFIG_DIR=/deploy/resume/config

# Update
RUN apk add --update nodejs

WORKDIR /app

ADD . /app


RUN cd /app; npm install --production

EXPOSE 2112

CMD [ "npm","start"]
