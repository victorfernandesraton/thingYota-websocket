module.exports = (payload, socket) => {
  console.info(new Date);
  console.log("Chat message as recived");
  console.log(payload);
  socket.emit("message", payload);
}