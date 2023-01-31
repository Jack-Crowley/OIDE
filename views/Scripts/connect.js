socket = new WebSocket('ws://150.136.218.146:8080'); 

socket.addEventListener('open', () => {
    console.log("Connected")
})

socket.addEventListener('message', function (event) {
    let x = document.createElement("p");
    x.textContent=event.data
    document.querySelector('.terminal').appendChild(x)
    console.log('Message from server ', event.data);
});

function sendMessage(header, message) {
    if (this.socket.readyState == WebSocket.OPEN) {
        let msg = {head: header, msg: message};
        this.socket.send(JSON.stringify(msg));
    }
}