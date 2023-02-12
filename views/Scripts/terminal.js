const delay = ms => new Promise(res=>setTimeout(res, ms))
let currValue = "> ";

<<<<<<< HEAD
let term = document.querySelector(".terminal");
let input = document.querySelector(".terminal input");
let current = document.querySelector(".current")

let commands = []
curCommand = 0

function starting() {
    current = document.createElement("p");
    current.textContent="> "
    current.classList.add("current")

    input = document.createElement("input")
    term.append(current)
    term.append(input)
}
 
term.addEventListener("keydown", async (event) => {
    if (event.key == "Enter") {
        createNewLine()
    }
    if (event.key == "ArrowUp") {
        if (commands.length > 0) {
            if (input.value === "") {
                curCommand = commands.length-1
            }
            else if (curCommand > 0) {
                curCommand--
            }
            console.log(commands, curCommand)
            //current.textContent = commands[curCommand]
            input.value = commands[curCommand]
            console.log(input.value.length)
            // input.blur()
            input.selectionStart = input.selectionEnd = input.value.length
            // input.selectionEnd = input.value.length
            // input.setSelectionRange(input.value.length, input.value.length)
            // input = document.querySelector(".terminal input")
            input.focus()
        }
        // input.focus()
    }
})

term.addEventListener('click', async () => {
    input.focus();
})

function createNewLine(v="") {
    current.remove()
    let value
    if (v === "") {
        value = input.value
    } else {
        value = v
    }

    if (value !== "" && value !== commands[commands.length-1]) {
        commands.push(value)
        curCommand = commands.length
    }

    let x = document.createElement("p");
    x.textContent="> " + value;
    term.appendChild(x);

    input.remove()
    if (value.length !== 0 && v !== value) {
        if (value === "clear") {
            term.innerHTML = ""
        }
        else if (value === "python r.py") {
            runPyFile(false)
        }
        else checkValidInput()
    }

    current = document.createElement("p");
    current.textContent="> "
    current.classList.add("current")

    input = document.createElement("input")
    term.append(current)
    term.append(input)
    input.focus()
}

function checkValidInput() {
    let value = input.value;
    let current = document.createElement("p");
    current.textContent=`Error: term "${value}" is not a recognized command`
    current.classList.add("err")
    term.appendChild(current)
=======
let input;
let current;
let previousHistory = document.querySelector(".prevHistory")
let currentTerm = document.querySelector(".currentItem");
let terminal = document.querySelector(".terminal")


function starting() {
    current = document.createElement("p");
    current.classList.add("startingDiv")
    current.textContent=">"
    current.classList.add("current")

    input = document.createElement("div")
    input.setAttribute("contenteditable", true)
    input.classList.add('terminalInput')
    addEvent(input)
    currentTerm.append(current)
    currentTerm.append(input)       
}
 
currentTerm.addEventListener("keypress", async (event) => {
    if (event.key == "Enter") {
        createNewLine()
    }
})

terminal.addEventListener('click', async () => {
    input.focus();
})

async function createNewLine() {
    let value = input.textContent;
    let x = document.createElement("p");
    x.textContent="> "+value;
    previousHistory.appendChild(x);

    if (value.length > 0) {
        let value2 = input.textContent.split("  ").join(' ').trim()
        let curr = document.createElement("p");
        let firstWord = value2.split(" ")[0]
        console.log(firstWord)
        switch (firstWord) {
            case "cls":
                previousHistory.innerHTML=""
                break;
            default:
                curr.textContent=`Error: term "${value2}" is not a reconignized command`
                curr.classList.add("err")
                previousHistory.appendChild(curr)
                break;
        }
    }
    input.textContent=""
}


function createRange(e,t,n){if(n||((n=document.createRange()).selectNode(e),n.setStart(e,0)),0===t.count)n.setEnd(e,t.count);else if(e&&t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(n.setEnd(e,t.count),t.count=0);else for(var o=0;o<e.childNodes.length&&(n=createRange(e.childNodes[o],t,n),0!==t.count);o++);return n}function getCurrentCaretPosition(e){var t,n=0,o=e.ownerDocument||e.document,a=o.defaultView||o.parentWindow;if(void 0!==a.getSelection){if((t=a.getSelection()).rangeCount>0){var r=a.getSelection().getRangeAt(0),c=r.cloneRange();c.selectNodeContents(e),c.setEnd(r.endContainer,r.endOffset),n=c.toString().length}}else if((t=o.selection)&&"Control"!=t.type){var i=t.createRange(),g=o.body.createTextRange();g.moveToElementText(e),g.setEndPoint("EndToEnd",i),n=g.text.length}return n}function setCurrentCaretPosition(e,t){if(t>=0){var n=window.getSelection();range=createRange(e,{count:t}),range&&(range.collapse(!1),n.removeAllRanges(),n.addRange(range))}}

var keywords = [
   {
      words: [
         "CLS",
         "PYTHON",
         "NODE",
         "G++",
         "GCC",
         "RUN",
      ]
   }
];

function addEvent(editor) {
    editor.addEventListener("keydown", function (e) {
    
        if( e.ctrlKey || e.altKey || ( e.key.length - 1 && e.key != "Backspace" ) || ( e.shiftKey && e.char ) ) return;
     
        pos = getCurrentCaretPosition(this);
     
        
        text = this.innerText; 
        words = text.split(/\s/gm); 
     
        for (var i = 0; i < keywords.length; i++)
           for (var n = 0; n < words.length; n++) {
              if (keywords[i].words.indexOf(words[n].toUpperCase().trim()) > -1 && (keywords[i].id >= 0 ? keywords[i].id == n : true) )
                 words[n] = `<span class='statement'">${words[n]}</span>`;
           }
     
        this.innerHTML = words.join("&nbsp;");
        setCurrentCaretPosition(this, pos);
     });
>>>>>>> parent of 49cb2de (random Things)
}

starting()