# FROM <BaseImageName>:<Tag>
FROM node:16.16.0-alpine3.16

WORKDIR /usr/src/app

# COPY <Source file(s)> <Destination folder>
COPY package*.json ./

# Use this run instructions that typically install dependencies
RUN npm install

# Copy everything from LOCAL project
# Paste them in the root directory of my docker container
COPY . .

EXPOSE 9099

# This takes the command to start the application
CMD [ "node", "index.js" ]