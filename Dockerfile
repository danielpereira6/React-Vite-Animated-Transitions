FROM node:latest
RUN apk add curl
RUN curl -o- -k -L https://yarnpkg.com/install.sh
RUN mkdir -p /usr/src/app
ADD ./package.json ./yarn.* /tmp/
ADD ./package.json /
RUN npm install -g serve
RUN cd /usr/src/app  
ADD ./dist /usr/src/app/

EXPOSE 3000 
WORKDIR /usr/src/app
