const restify = require('restify');

const server = restify.createServer({
  name: "sample-scoket"
});

server.use(restify.plugins.queryParser({
  mapParams: true
})).use(restify.plugins.bodyParser({
  mapParams: true
}));

server.use(restify.plugins.acceptParser(server.acceptable));

module.exports = server;
