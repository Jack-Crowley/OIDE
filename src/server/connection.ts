import {WebSocket, RawData, Server} from 'ws';
import { JSONMessage } from '../message.js';
import { recieveMessage } from "./python.js"
// Set up server
const port: number = 8080;

const wss: Server = new Server({ port: port });

console.log(`Started on port ${port}`)

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws: WebSocket) {
    // Wire up logic for the message event (when a client sends something)
    ws.on('message', async function incoming(message: RawData) {
        let messageStr: JSONMessage = JSON.parse(message.toString()) as JSONMessage;
        let header: string = messageStr.head;
        let fullMsg: string = messageStr.msg;

        console.log(`Message received!!! Header: ${header}; Message ${fullMsg}`)

        switch (header) {
            case "pyt":
                recieveMessage(fullMsg, ws);
                break;
        }
    });

    
});