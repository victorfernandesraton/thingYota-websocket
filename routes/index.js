const testController = require('./test');

module.exports = (server) => {
  // test socket
  testController(server);
  // echo
  server.get('/echo', (req, res) => {
    res.send(server)
  });
}
