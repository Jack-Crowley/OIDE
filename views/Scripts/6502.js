class CPU {
    constructor() {
        this.sp = 0xFF;
        this.a = 0x00;
        this.x = 0x00;
        this.y = 0x00;
        this.pc = 0x0600;
        this.flags = 0x00110000;
    }
}

/* Memory Layout:
   $0000 - $00FF - zero page
   $0100 - $01FF - stack
   $0200 - $05FF - display
   $0600 - $EFFF - program
   $FF00 - $FFFF - vector table
*/
class Memory {
    constructor() {
        this.mem = Array(65536).fill(0);
    }

    setAddr(addr, val) {
        this.mem[addr] = val;
    }
}

class Display {
    constructor(canvas) {
        this.screen = canvas;
        this.ctx = canvas.getContext("2d");
        this.palette = ["#000000", "#ffffff", "#880000", "#aaffee",
                        "#cc44cc", "#00cc55", "#663399", "#eeee77",
                        "#dd8855", "#664400", "#ff7777", "#333333",
                        "#777777", "#aaff66", "#0088ff", "#bbbbbb"];
        this.width = this.screen.width;
        this.height = this.screen.height;
    }

    show(memoryObj) {
        let mem = memoryObj.mem;
        for (let i = 0; i < 32; i++) {
            for (let j = 0; j < 32; j++) {
                this.ctx.fillStyle = this.palette[mem[i*32 + j + 0x0200]];
                this.ctx.fillRect(j*(this.width / 32), i*(this.height / 32), (this.width / 32), (this.height / 32));
            }
        }
    }
}

let cpu = new CPU();
let memory = new Memory();
let display = new Display(document.getElementById("screen"));
display.show(memory);