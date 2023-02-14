let temp = {"accountName":"TestUser","repoName":"Test Project","files":[{"name":"testing.py","text":"print(\"hi\")","language":"python"},{"name":"a.py","text":"print('b')","language":"python"},{"name":"b.py","text":"print(\"b\")\r\nprint(\"wait actually no thats a c\")","language":"python"}]}

{/* <div class="file fileActive" data-fileNum="0">
                        <img src="../Images/PyIcon.png" alt="">
                        <h3>testing.py</h3>
                        <p></p>
                    </div> */}

let filesDiv = document.querySelector(".files")

function load() {
    temp.files.forEach((file) => {
        let fileDiv = document.createElement("div")
        fileDiv.classList.add("file")
        filesDiv.appendChild(fileDiv)
        let img = document.createElement('img')
        img.src = "../Images/PyIcon.png"
        fileDiv.appendChild(img)
        let txt = document.createElement('h3')
        txt.textContent = file.name
        fileDiv.appendChild(txt)
        let text = document.createElement('p')
        text.textContent=file.text
        fileDiv.appendChild(text)
        fileDiv.dataset.fileNum = temp.files.indexOf(file)
        addFileEvent(fileDiv)
    })

    if (temp.files.length > 0) {
        let activeFile = document.querySelector(".file");
        activeFile.classList.add("fileActive");
        editor.setValue(document.querySelector(".fileActive p").textContent)
    }
}

function addFileEvent(file) {
    file.addEventListener("click", () => {
        let active = document.querySelector(".fileActive")
        let activeText = document.querySelector(".fileActive p");
        activeText.textContent = editor.getValue()
        active.classList.remove("fileActive")
        file.classList.add("fileActive")
        let newText = document.querySelector(".fileActive p").textContent;
        editor.setValue(newText)
    })
}
