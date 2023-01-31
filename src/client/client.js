"use strict";
exports.__esModule = true;
exports.Client = void 0;
var ws_1 = require("ws");
// Create WebSocket connection.
var Client = /** @class */ (function () {
    function Client() {
        this.socket = new ws_1.WebSocket('ws://150.136.218.146:8080');
        this.socket.addEventListener('open', function () {
            console.log("Connected");
        });
        this.socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });
    }
    Client.prototype.sendMessage = function (header, message) {
        if (this.socket.readyState == ws_1.WebSocket.OPEN) {
            var msg = { head: header, msg: message };
            this.socket.send(JSON.stringify(msg));
        }
    };
    return Client;
}());
exports.Client = Client;
