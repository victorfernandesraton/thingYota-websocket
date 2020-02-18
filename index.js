const
  constants = require('./constants/server'),
  server = require("./server"),
  socketio = require("socket.io"),
  routes = require("./routes/"),
  io = socketio.listen(server.server);


const
  chat = require('./routes/chat/').socketHandle;
// Variaveis de ambiente
require('dotenv').config({
  path: constants.enviroment == 'development' ? '.env.development' : '.env'
});

// Informações da rede
require('dns').lookup(require('os').hostname(), (err, add, fam) => {
  console.info(`addr: ${add} fan: ${fam}`);
});

// basic socket learn
io.sockets.on('connection', (socket, req) => {
  console.info(new Date)
  console.log(`Connection : ${socket.id}`)
  // chat nessage
  socket.on('message', payload => {
    console.info(new Date);
    console.log("Chat message as recived");
    console.log(payload);
    io.sockets.emit("message", payload)
  });

  // arduino
  socket.on("arduino", payload => {
    console.log("payload");
  })
});


// Hook de rotas
routes(server)

// Start do server
server.listen(constants.PORT, () => {
  console.info(new Date)
  console.info("Server run", constants.PORT);
  console.info("Press Ctrl+C to kill this server")
});
