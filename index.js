require('dotenv').config({
  path:  process.env.NODE_ENV == 'development' ? '.env.development' : '.env'
})

const 
  restify = require('restify'),
  fs = require('fs'),
  path = require('path'),
  socketio = require('socket.io'),
  server = restify.createServer(),
  io = socketio.listen(server.server);


io.sockets.on('connection', (socket) => {
  console.log("Connection");
  // quando chega messagen do chat
  socket.on("chat message", data => {
    console.log(data);
    // broadcast para todos receber as menssagens
    io.sockets.emit("chat message", data)
    // caso use socket no lugar de socket.io a emissão é apenas para o usuário
  });

  // evento de ip
  socket.on('ip', data => {
    console.log(data);
  })

  socket.on("mac" , data => {
    console.log(data)
  })
});

// Página do chat para testes
server.get('/chat', function indexHTML(req, res, next) {
  fs.readFile(path.resolve(__dirname,'pages','index.html'), function (err, data) {
      if (err) {
          next(err);
          return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
      // next();
  });
});

server.listen(process.env.PORT, (data) =>{
  console.log('listening on', process.env.PORT);
});
