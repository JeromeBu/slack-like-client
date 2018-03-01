import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");
function subscribeToTimer(cb) {
  socket.on("timer", timestamp => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}
function connection(user, cb) {
  socket.on("connection", user);
  socket.emit("userConnection", user);
}

export { subscribeToTimer, connection };