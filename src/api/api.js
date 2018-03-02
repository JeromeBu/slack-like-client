import openSocket from "socket.io-client";
import config from "../config";

const socket = openSocket(config.API_URL);

function createNewMessage(message) {
  console.log("socket function new message");
  socket.emit("newMessage", message);
}

function createNewChannel(channel) {
  console.log("socket function new channel");
  socket.emit("newChannel", channel);
}

function listenToNewChannels(cb) {
  socket.on("newChannelDisplay", function(data) {
    console.log("Socket new channel display");
    cb(null, data);
  });
}

function listenToNewMessages(cb) {
  socket.on("newMessageDisplay", function(data) {
    console.log("Socket new message display");
    cb(null, data);
  });
}

export {
  createNewMessage,
  listenToNewMessages,
  createNewChannel,
  listenToNewChannels
};
