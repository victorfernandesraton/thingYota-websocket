const testController = require('./test');
const chatContoller = require('./chat').controller
module.exports = (server) => {
  // chat 
  chatContoller(server);
  // test socket
  testController(server);
  // echo
  server.get('/echo', (req, res) => {
    res.send(server)
  });
}
