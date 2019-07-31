FROM node:10 

WORKDIR /appFront

COPY ./TeamYellowPokedex/* .

RUN npm install

RUN npm install -g @angular/cli=7.3.9

RUN npm build
