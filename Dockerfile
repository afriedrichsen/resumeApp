FROM node:alpine

MAINTAINER Alex Friedrichsen <afriedrichsen@me.com>

ENV NODE_ENV=production_docker
ENV PORT=2112
ENV MONGO_URI=http://localhost:27017/resume_dev

# Update
RUN apk add --update nodejs

WORKDIR /app

ADD . /app
RUN node -v

RUN cd /app; npm install --production

EXPOSE 2112

CMD [ "npm","start"]
