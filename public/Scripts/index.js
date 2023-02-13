// document.querySelector('button').addEventListener('click', () => {
//     sendMessage("pyt", document.querySelector("textArea").value)

// const c = require("../../server/c");

// })
function runPyFile(newLine=true) {
// message = editor.getValue();
    // console.log(message);
    // let Client = new Client();
    // client.sendMessage("pyt", message)
    let newLineTxt;
    let head;
    console.log(editor.language)
    
    switch (editor.language) {
        case "python":
            newLineTxt = "python r.py";
            head = "pyt";
            break;
        case "c":
            newLineTxt = "./a.out";
            head = "gcc";
            break;
    }
    console.log(newLineTxt)
    console.log(head)
    if (newLine) createNewLine(newLineTxt/*"./a.out"/*"python r.py"*/)
    message = editor.getValue()
    console.log(message)
    message = message.replace(/'/g, '"')
    //console.log(message.length)
    // for (let i=0; i<message.length; i++) {
    //     console.log(i)
    //     if (message.charAt(i) === "'") {
    //         message = message.slice(0, i) + "\\" + message.slice(i)
    //         i++
    //     }
    // }
    //console.log(message)
    sendMessage("c"/*head*/, message)
}
document.querySelector("button").addEventListener("click", () => {
    runPyFile()
})