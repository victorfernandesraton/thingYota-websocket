const onConnect = (socket) => {
  console.info('Connection');
  socket.emit('message', "ok");
}

const onConnection = (socket) => {
  console.info("Connection");
  socket.emit('message', "ok");
}

module.exports = {
  onConnect,
  onConnection
}
