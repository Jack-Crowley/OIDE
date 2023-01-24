import { WebSocket, Event, MessageEvent } from "ws";
import { JSONMessage } from "../message.js";

// Create WebSocket connection.

export class Client {
    private socket = new WebSocket('ws://150.136.218.146:8080'); 

    constructor() {
        this.socket.addEventListener('open', () => {
            console.log("Connected")
        })
        this.socket.addEventListener('message', function (event: MessageEvent) {
            console.log('Message from server ', event.data);
        });
    }

    public sendMessage(header : string, message : string) {
        if (this.socket.readyState == WebSocket.OPEN) {
            let msg = {head: header, msg: message} as JSONMessage;
            this.socket.send(JSON.stringify(msg));
        }
    }
}
