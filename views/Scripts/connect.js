socket = new WebSocket('ws://150.136.218.146:8080'); 

socket.addEventListener('open', () => {
    console.log("Connected")
})

socket.addEventListener('message', function (event) {
    let messageStr = JSON.parse(event.data.toString());
    let header = messageStr.head;
    let fullMsg = messageStr.msg;
    let term = document.querySelector('.terminal')
    let currStr = ""
    for (let i = 0; i < fullMsg.length; i++) {
        if (fullMsg[i] == "\n") {
            let x;
            if (currStr=="\n") {
                x = document.createElement("br");
            }
            else {
                x = document.createElement("p");
                x.textContent=currStr
                currStr=""
                if (header == "err") {
                    x.classList.add("err")
                }
            }
            term.appendChild(x)
        }
        currStr+=fullMsg[i]
    }
    if (currStr.length!=0) {
        let x = document.createElement("p");
        x.textContent=currStr
        if (header == "err") {
            x.classList.add("err")
        }
        term.appendChild(x)
    }
    console.log('Message from server ', event.data);
});

function sendMessage(header, message) {
    if (this.socket.readyState == WebSocket.OPEN) {
        let msg = {head: header, msg: message};
        this.socket.send(JSON.stringify(msg));
    }
}