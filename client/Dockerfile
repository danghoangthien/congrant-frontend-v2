FROM node:14.19.1

RUN mkdir -p /app/client

WORKDIR /app/client

COPY package*.json /app/client

RUN npm install && npm cache clean --force

CMD ["npm", "start:dev"]
