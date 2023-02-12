function save() {
    let activeText = document.querySelector(".fileActive p");
    activeText.textContent = editor.getValue()

    let obj = {
        "accountName": "TestUser",
        "repoName": "Test Project",
        "files": [
            
        ]
    }
    document.querySelectorAll(".file").forEach((file) => {
        obj.files.push({"name":file.children[1].textContent,"text":file.children[2].textContent,"language":"python"})
    })
    console.log(JSON.stringify(obj))
}

document.querySelector(".saveCode").addEventListener("click", save)
