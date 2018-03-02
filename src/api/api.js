import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");

function createNewMessage(message) {
  console.log("socket function new message");
  socket.emit("newMessage", message);
}

function listenToNewMessages(cb) {
  socket.on("newMessageDisplay", function(data) {
    console.log("Socket new message");
    cb(null, data);
  });
}

export { createNewMessage, listenToNewMessages };
