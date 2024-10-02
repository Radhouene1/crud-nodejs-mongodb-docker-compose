FROM node:14

WORKDIR /crud-app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD ["node", "server.js"]