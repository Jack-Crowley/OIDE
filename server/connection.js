const {WebSocket, RawData, Server} = require('ws');
const { recieveMessagePyt } = require("./python.js")
const { recieveMessageC } = require("./c.js")
// Set up server
const port = 8080;

const wss = new Server({ port: port });

console.log(`Started on port ${port}`)

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws) {
    // Wire up logic for the message event (when a client sends something)
    ws.on('message', async function incoming(message) {
        let messageStr = JSON.parse(message.toString());
        let header = messageStr.head;
        let fullMsg = messageStr.msg;

        console.log(`Message received!!! Header: ${header}; Message ${fullMsg}`)

        switch (header) {
            case "pyt":
                recieveMessagePyt(fullMsg, ws);
                break;
            case "gcc":
                recieveMessageC(fullMsg, ws);
                break;
        }
    });

    
});