let temp = {"accountName":"TestUser","repoName":"Test Project","files":[{"name":"testing.py","text":"print(\"hi\")","language":"python"},{"name":"a.py","text":"print('b')","language":"python"},{"name":"b.py","text":"print(\"b\")\r\nprint(\"wait actually no thats a c\")","language":"python"}]}

{/* <div class="file fileActive" data-fileNum="0">
                        <img src="../Images/PyIcon.png" alt="">
                        <h3>testing.py</h3>
                        <p></p>
                    </div> */}

let filesDiv = document.querySelector(".files")

function load() {
    let children = filesDiv.children

    for (let i = 0; i < children.length-1; i++) {
        addFileEvent(children[i])
    }
    console.log(children.length)

    if (children.length > 0) {
        let activeFile = document.querySelector(".file");
        activeFile.classList.add("fileActive");
        editor.setValue(document.querySelector(".fileActive p").textContent)
    }
}

function addFileEvent(file) {
    file.addEventListener("click", () => {
        console.log("click")
        let active = document.querySelector(".fileActive")
        let activeText = document.querySelector(".fileActive p");
        activeText.textContent = editor.getValue()
        active.classList.remove("fileActive")
        file.classList.add("fileActive")
        let newText = document.querySelector(".fileActive p").textContent;
        editor.setValue(newText)
    })
}

load()