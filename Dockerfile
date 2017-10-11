FROM node:8.6.0-alpine

# Update
RUN apk add --update nodejs

WORKDIR /app

ADD . /app

RUN cd /app; npm install --production

EXPOSE 2112

CMD [ "npm","docker"]