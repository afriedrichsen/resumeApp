FROM node:alpine

MAINTAINER Alex Friedrichsen <afriedrichsen@me.com>

# Update
RUN apk add --update nodejs

WORKDIR /app

ADD . /app

RUN cd /app; npm install --production

EXPOSE 2112

CMD [ "npm","start"]
