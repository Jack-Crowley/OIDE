// document.querySelector('button').addEventListener('click', () => {
//     sendMessage("pyt", document.querySelector("textArea").value)

// const c = require("../../server/c");

// })
function runCodeFile(newLine=true) {
// message = editor.getValue();
    // console.log(message);
    // let Client = new Client();
    // client.sendMessage("pyt", message)
    let newLineTxt;
    let head;
    // console.log(editor.language)
    console.log(editor.getModel().getLanguageId())
    
    switch (editor.getModel().getLanguageId()) {
        case "python":
            newLineTxt = "python r.py";
            head = "pyt";
            break;
        case "c":
            newLineTxt = "./a.out";
            head = "gcc";
            break;
        case "cpp":
            newLineTxt = "./a.out";
            head = "cpp";
            break;
        case "java":
            newLineTxt = "java r.java";
            head = "jva";
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
    sendMessage(head, message)
}

function onNewFileSubmit() {
    let fileName = document.querySelector(".repoName").value
    let lang = document.querySelector('.lang')
    let sections = fileName.toString().split(".")
    let fileExtension = sections[sections.length-1]
    let options = ["py","cpp","c","java"]
    if (options.indexOf(fileExtension) != -1) {
        console.log(fileExtension)
        lang.value=fileExtension
        return true
    }
    return false
}

document.querySelector(".runBtn").addEventListener("click", () => {
    runCodeFile()
})