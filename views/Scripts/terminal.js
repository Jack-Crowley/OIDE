const delay = ms => new Promise(res=>setTimeout(res, ms))
let currValue = "> ";

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
}

starting()