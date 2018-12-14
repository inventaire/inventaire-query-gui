FROM node:8.12.0-jessie

WORKDIR /opt

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
