// document.querySelector('button').addEventListener('click', () => {
//     sendMessage("pyt", document.querySelector("textArea").value)
// })
document.querySelector("button").addEventListener("click", () => {
    // message = editor.getValue();
    // console.log(message);
    // let Client = new Client();
    // client.sendMessage("pyt", message)
    createNewLine("python r.py")
    message = editor.getValue()
    message = message.replace(/'/g, '"')
    console.log(message.length)
    // for (let i=0; i<message.length; i++) {
    //     console.log(i)
    //     if (message.charAt(i) === "'") {
    //         message = message.slice(0, i) + "\\" + message.slice(i)
    //         i++
    //     }
    // }
    console.log(message)
    sendMessage("pyt", message)
})