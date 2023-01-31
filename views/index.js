// var _a;
// //import {Client} from "../src/client/client.js"
// (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
//     var _a;
//     var message = (_a = document.querySelector('div#container')) === null || _a === void 0 ? void 0 : _a.textContent;
//     for (var _i = 0, _b = message.split('\n'); _i < _b.length; _i++) {
//         var x = _b[_i];
//         console.log(message);
//     }
//     // console.log(message.split('\n'))
//     //let client : Client = new Client();
//     //client.sendMessage("pyt", message)
// });

// import {Client} from "../src/client/client.js"
document.querySelector("button").addEventListener("click", () => {
    // message = editor.getValue();
    // console.log(message);
    // let Client = new Client();
    // client.sendMessage("pyt", message)
    sendMessage("pyt", editor.getValue())
})