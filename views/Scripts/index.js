// document.querySelector('button').addEventListener('click', () => {
//     sendMessage("pyt", document.querySelector("textArea").value)
// })
document.querySelector("button").addEventListener("click", () => {
    // message = editor.getValue();
    // console.log(message);
    // let Client = new Client();
    // client.sendMessage("pyt", message)
    createNewLine("python r.py")
    sendMessage("pyt", editor.getValue())
})