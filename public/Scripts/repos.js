document.onclick = removeRightClick;
let menu = document.querySelector(".rightClickMenu")

document.querySelectorAll(".repo").forEach((repo) => {
    console.log("test")
    repo.addEventListener('click', (e) => {
        window.location.href="/repo/"+repo.children[1].children[0].children[0].textContent 
    })
})

document.querySelectorAll(".repo").forEach((r) => {
    r.addEventListener(('contextmenu'), (e) => {
        console.log("Test")
        e.preventDefault();
        if (menu.style.display == "block") {
            menu.style.display = "none"
        }
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    })
})

function removeRightClick() {
    menu.style.display = "none"
}