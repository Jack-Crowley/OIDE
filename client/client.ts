import { WebSocket, Event, MessageEvent } from "ws";
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080'); 

// Connection opened
socket.addEventListener('open', function (event: Event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event: MessageEvent) {
    console.log('Message from server ', event.data);
});