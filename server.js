const WebSocket = require('ws');

const PORT = 5005

const wsServer = new WebSocket.Server({
    port: PORT
})

wsServer.on('connection', (socket) => {

    console.log("Client connected")
    socket.on('message', (msg) => {
        console.log("Client: " + msg)
        socket.send("Server: " + msg);
    })
})

console.log((new Date()) + " server started on port " + PORT);