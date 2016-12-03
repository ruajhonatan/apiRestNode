FROM node:latest
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev libkrb5-dev
RUN mkdir -p /usr/src/code
WORKDIR /usr/src/code

ADD ./code/package.json /usr/src/code/package.json
RUN npm install

ADD ./code /usr/src/code