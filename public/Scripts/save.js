function save() {
    let files = document.querySelector('.files')
    let activeText = document.querySelector(".fileActive p");
    activeText.textContent = editor.getValue()

    let obj = {
        "files": [
            
        ]
    }
    document.querySelectorAll(".file").forEach((file) => {
        console.log(file)
        obj.files.push({"name":file.children[1].textContent,"text":file.children[2].textContent,"language":"python","id":file.children[3].textContent})
    })

    let txt = document.querySelector(".saveFileBox")
    txt.value = JSON.stringify(obj)
    document.querySelector('.saveForm').submit()
}

document.querySelector(".saveBtn").addEventListener("click", save)
