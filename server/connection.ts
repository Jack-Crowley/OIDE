import {RawData, Server, WebSocket} from 'ws';
// Set up server
const port = 8080;

const wss: Server = new WebSocket.Server({ port: port });

console.log(`Started on port ${port}`)

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws: WebSocket) {

    // Wire up logic for the message event (when a client sends something)
    ws.on('message', function incoming(message: RawData) {
    console.log('received: %s', message);
    });

    // Send a message
    ws.send('Hello client!');
});

export {};