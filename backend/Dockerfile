FROM node:10-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
RUN npm install axios -g
COPY . /usr/src/app
EXPOSE 5000
CMD ["npm", "start"]