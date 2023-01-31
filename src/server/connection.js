"use strict";
exports.__esModule = true;
var ws_1 = require("ws");
var python_js_1 = require("./python.js");
// Set up server
var port = 8080;
var wss = new ws_1["default"].Server({ port: port });
console.log("Started on port ".concat(port));
// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws) {
    // Wire up logic for the message event (when a client sends something)
    ws.on('message', function incoming(message) {
        var messageStr = JSON.parse(message.toString());
        var header = messageStr.head;
        var fullMsg = messageStr.msg;
        switch (header) {
            case "pyt":
                ws.send("Output: ".concat((0, python_js_1.recieveMessage)(fullMsg)));
                break;
        }
    });
});
