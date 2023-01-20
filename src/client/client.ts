import { WebSocket, Event, MessageEvent } from "ws";
import { JSONMessage } from "../message.js";
// Create WebSocket connection.
const socket = new WebSocket('ws://150.136.218.146:8080'); 
const msg = new JSONMessage("pyt", "print(\"Hello World\")");

// Connection opened
socket.addEventListener('open', function (event: Event) {
    console.log("Sending Message")
    socket.send(JSON.stringify(msg));
});

// Listen for messages
socket.addEventListener('message', function (event: MessageEvent) {
    console.log('Message from server ', event.data);
    socket.close();
});
