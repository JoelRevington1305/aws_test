
FROM node:22

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node" , "src/index.js" ]
