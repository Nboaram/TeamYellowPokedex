FROM ubuntu:18.04 AS build

WORKDIR /opt/angular-server

USER root

RUN apt update

RUN apt-get install curl -y

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y nodejs

RUN apt-get install -y build-essential

WORKDIR /opt/angular-server/Pokedex

RUN npm install typescript

RUN NG_CLI_ANALYTICS=ci npm -g install 

RUN NG_CLI_ANALYTICS=ci npm -g install @angular/cli

RUN ng build
