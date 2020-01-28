# base image
FROM node:13.7.0-alpine3.11

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY src /app/src
COPY public /app/public

RUN npm install --silent
RUN npm run build
RUN npm install http-server -g

# start app
CMD ["npx", "http-server", "build"]