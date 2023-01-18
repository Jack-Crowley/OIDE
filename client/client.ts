import { WebSocket, Event, MessageEvent } from "ws";
// Create WebSocket connection.
const socket = new WebSocket('ws://150.136.218.146:8080'); 

let interval: NodeJS.Timer;

let i = 0;
function sendMessage() {
    socket.send(`Hello Server! #${i}`);
    if (++i == 10) {
        clearInterval(interval);
        socket.close();
    }
}

// Connection opened
socket.addEventListener('open', function (event: Event) { 
    interval = setInterval(sendMessage, 100);
});

// Listen for messages
socket.addEventListener('message', function (event: MessageEvent) {
    console.log('Message from server ', event.data);
    
});
