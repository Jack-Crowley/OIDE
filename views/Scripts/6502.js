
class Emulator {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.display = new Display(document.getElementById("screen"));
    }

    showScreen() {
        this.display.show(this.memory);
    }

    inputProgram(program) {

    }
}
class CPU {
    constructor() {
        this.sp = 0xFF;
        this.a = 0x00;
        this.x = 0x00;
        this.y = 0x00;
        this.pc = 0x0600;
        this.flags = 0x00110000;
        /*               Name  */
        this.opcodes = [["ADC", ],
                        ["AND"],
                        ["ASL"],
                        ["BCC"],
                        ["BCS"],
                        ["BEQ"],
                        ["BIT"],
                        ["BMI"],
                        ["BNE"],
                        ["BPL"],
                        ["BRK"],
                        ["BVC"],
                        ["BVS"],
                        ["CLC"],
                        ["CLD"],
                        ["CLI"],
                        ["CLV"],
                        ["CMP"],
                        ["CPX"],
                        ["CPY"],
                        ["DEC"],
                        ["DEX"],
                        ["DEY"],
                        ["EOR"],
                        ["INC"],
                        ["INX"],
                        ["INY"],
                        ["JMP"],
                        ["JSR"],
                        ["LDA"],
                        ["LDX"],
                        ["LDY"],
                        ["LSR"],
                        ["NOP"],
                        ["ORA"],
                        ["PHA"],
                        ["PHP"],
                        ["PLA"],
                        ["PLP"],
                        ["ROL"],
                        ["ROR"],
                        ["RTI"],
                        ["RTS"],
                        ["SBC"],
                        ["SEC"],
                        ["SED"],
                        ["SEI"],
                        ["STA"],
                        ["STX"],
                        ["STY"],
                        ["TAX"],
                        ["TAY"],
                        ["TSX"],
                        ["TXA"],
                        ["TXS"],
                        ["TYA"]]
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

    getVal(addr) {
        return this.mem[addr];
    }
}

class Display {
    constructor(canvas) {
        this.screen = canvas;
        this.ctx = canvas.getContext("2d");
        this.palette = ["#000000", "#ffffff", "#663399", "#003F91",
                        "#FF6542", "#85FFC7", "#358600", "#C9CBA3",
                        "#723D46", "#02C3BD", "#EDA4BD", "#FFAF87", 
                        "#330036", "#FF1654", "#C2AFF0", "#28666E"];
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

let emu = new Emulator();
emu.showScreen();
