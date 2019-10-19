FROM node:10.16.3-alpine

WORKDIR /app

COPY . .

ENV PORT=9000

RUN npm install

CMD [ "npm", "start" ]