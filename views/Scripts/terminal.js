const delay = ms => new Promise(res=>setTimeout(res, ms))
let currValue = "> ";

let term = document.querySelector(".terminal");
let input = document.querySelector(".terminal input");
let current = document.querySelector(".current")

function starting() {
    current = document.createElement("p");
    current.textContent="> "
    current.classList.add("current")

    input = document.createElement("input")
    term.append(current)
    term.append(input)
}
 
term.addEventListener("keypress", async (event) => {
    if (event.key == "Enter") {
        createNewLine()
    }
})

term.addEventListener('click', async () => {
    input.focus();
})

function createNewLine() {
    current.remove()
    let value = input.value;
    let x = document.createElement("p");
    x.textContent="> "+value;
    term.appendChild(x);

    input.remove()

    if (value.length > 0) {
        checkValidInput()
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
    current.textContent=`Error: term "${value}" is not a reconignized command`
    current.classList.add("err")
    term.appendChild(current)
}

starting()