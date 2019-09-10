FROM mhart/alpine-node:latest

# ENV NODE_ENV=production
ENV DOCKER_FLAG=true
# ENV PORT=2112
ENV RESUME_APP_CONFIG_DIR=/deploy/resume/config

WORKDIR /app

RUN mkdir -p /app/app/public
ADD ./dist/ /app/app
ADD package.json /app
ADD yarn.lock /app

# RUN cd /app; npm install --production
RUN cd /app; yarn install --production

EXPOSE 2112

CMD [ "npm","start"]