FROM node:10 

WORKDIR /appFront/

COPY ./AngularUI/* .

RUN npm install

RUN npm install -g @angular/cli=7.3.9

RUN npm build
