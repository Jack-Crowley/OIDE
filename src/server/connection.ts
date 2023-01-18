import WebSocket, {RawData} from 'ws';
import { recieveMessage } from "./python.js"
// Set up server
const port = 8080;

const wss: WebSocket.Server = new WebSocket.Server({ port: port });

console.log(`Started on port ${port}`)

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws: WebSocket) {

    // Wire up logic for the message event (when a client sends something)
    ws.on('message', function incoming(message: RawData) {
        let messageStr = JSON.parse(message.toString())
        let header = messageStr.head;
        let fullMsg = messageStr.msg;

        switch (header) {
            case "pyt":
                ws.send(`Output: ${recieveMessage(fullMsg)}`);
                break;
        }
    });

    
});

export {};
