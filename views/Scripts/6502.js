let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");
let palette = ["#000000", "#ffffff", "#880000", "#aaffee",
                "#cc44cc", "#00cc55", "#0000aa", "#eeee77",
                "#dd8855", "#664400", "#ff7777", "#333333",
                "#777777", "#aaff66", "#0088ff", "#bbbbbb"];

let screenArr = Array(1024).fill(0);
screenArr[32] = 3;
for (let i = 0; i < 320; i += 10) {
    for (let j = 0; j < 160; j += 5) {
        ctx.fillRect(i, j, 10, 5);
        alert();
    }
}