# use node.js base image
FROM node:20-alpine 

# set working directory
WORKDIR /app

# copy package files 
COPY package.json pack-lock.json ./

# install dependencies
RUN npm cli

# copy the rest of the app
COPY . .

# expose on port 3000
EXPOSE 3000

# commands to run app
CMD [ 'npm', 'start' ]

