FROM node:14

# create app directory
WORKDIR /usr/src/app

# install app dependencies
# a wildcard is used to ensure both package.json and package-lock.json are copied
# where available
COPY package*.json ./
COPY yarn.lock ./

RUN yarn

# bundle app source
COPY . .
COPY .env.production .env

RUN yarn build

ENV NODE_ENV production

EXPOSE 8080
CMD ["node", "dist/index.js"]
USER node