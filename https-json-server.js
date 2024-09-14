const jsonServer = require('json-server');
const https = require('https');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const options = {
  key: fs.readFileSync('cert.key'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, server).listen(3333, () => {
  console.log('JSON Server is running on https://localhost:3333');
});
