let files = document.querySelector('.files');
let editorCount = 0;
let editorPairs = Array(25).fill(0)
let container = document.querySelector(".editor")

document.querySelector(".newFile").addEventListener('click', () => {
    let x = prompt("Enter a file name")
    let file = document.createElement("div")
    file.classList.add("file")
    files.appendChild(file)
    let img = document.createElement('img')
    img.src = "../Images/PyIcon.png"
    file.appendChild(img)
    let txt = document.createElement('h3')
    txt.textContent = x
    file.appendChild(txt)
    file.appendChild(document.createElement('p'))
    file.dataset.fileNum = editorCount
    addFileEvent(file)
    
    let con = document.createElement('div')
    con.classList.add('container')

    let editor = monaco.editor.create(con, {
        language: 'python',
        theme: 'vs-dark'
    });

    editorPairs[editorCount++] = con

    container.insertBefore(con, container.children[1]);
})

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
let fi = document.querySelector(".file")
addFileEvent(fi)