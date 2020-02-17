const
  constants = require('./constants/server'),
  server = require("./server"),
  socketio = require("socket.io"),
  routes = require("./routes/"),
  io = socketio.listen(server.server);

// Variaveis de ambiente
require('dotenv').config({
  path: constants.enviroment == 'development' ? '.env.development' : '.env'
});

// Informações da rede
require('dns').lookup(require('os').hostname(), (err, add, fam)  =>{
  console.info(`addr: ${add}`);
  console.info(`fan: ${fam}`);
});

// basic socket learn
io.on('connection', (socket, req) => {
  console.log("Connection :")
  socket.on('mmessage', (message) => {
    console.log(new Date)
    console.info(req);
    console.log("message");
    console.log(message)
    io.sockets.emit("teste", "teste")
  });
});

// Hook de rotas
routes(server)

// Start do server
server.listen(constants.PORT, () => {
  console.info(new Date)
  console.info("Server run", constants.PORT);
  console.info("Press Ctrl+C to kill this server")
});
