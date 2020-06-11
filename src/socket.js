/**
 * socket.io
 */
const io = require('socket.io');
const {onConnect, onConnection} = require('./controller/socket');

module.exports = (server) => {
  const socket = io(server);

  const notification = socket.of("/notification");
  const arduinoSocket = socket.of("/arduino");
  const bucketSocket = socket.of("/bucket");
  const userSocket = socket.of("/user");

  socket.on("connect", onConnect);
  socket.on("connection", onConnection);

  return {...socket, notification, arduinoSocket, bucketSocket, userSocket};
}



