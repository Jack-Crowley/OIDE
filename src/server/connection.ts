import {WebSocket, RawData, Server} from 'ws';
import { recieveMessage } from "./python.js"
// Set up server
const port = 8080;

const wss: Server = new Server({ port: port });

console.log(`Started on port ${port}`)

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws: WebSocket) {

    // Wire up logic for the message event (when a client sends something)
    ws.on('message', async function incoming(message: RawData) {
        

        let messageStr = JSON.parse(message.toString())
        let header = messageStr.head;
        let fullMsg = messageStr.msg;

        console.log(`Message received!!! Header: ${header}; Message ${fullMsg}`)

        switch (header) {
            case "pyt":
                let output : string = await recieveMessage(fullMsg);
                console.log(output);
                ws.send(`Output: ${output}`);
                break;
        }
    });

    
});