# pull official base image
FROM node:14.17.6

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 3001
# add app
COPY . ./

# start app
# CMD ["npm", "start"]
