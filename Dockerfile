FROM node:10.23-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

CMD [ "npm", "run", "serve" ]