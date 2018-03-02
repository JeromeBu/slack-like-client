import openSocket from "socket.io-client";
import config from "../config";
const socket = openSocket(config.API_URL);

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
