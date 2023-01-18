import { WebSocket, Event, MessageEvent } from "ws";
// Create WebSocket connection.
const socket = new WebSocket('ws://150.136.218.146:8080'); 

// Connection opened
socket.addEventListener('open', function (event: Event) {
    let i = 0;
    let intervalID = setInterval(function sendMessage() {
        socket.send('Hello Server!'+i++);
        if (i > 10) {
            socket.close();
            clearInterval(intervalID);
            
        }
    },100)

});

// Listen for messages
socket.addEventListener('message', function (event: MessageEvent) {
    console.log('Message from server ', event.data);
});
