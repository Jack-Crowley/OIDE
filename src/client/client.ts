import { WebSocket, Event, MessageEvent } from "ws";
// Create WebSocket connection.
const socket = new WebSocket('ws://150.136.218.146:8080'); 

// Connection opened
socket.addEventListener('open', function (event: Event) {
    let string = "print(\"Hello World\")"
    socket.send("PY: ")

});

// Listen for messages
socket.addEventListener('message', function (event: MessageEvent) {
    console.log('Message from server ', event.data);
});
