
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
                      /* Name   Acc   Imm   Imp   Rel   Abs   ZP    Ind   ABX   ABY   ZPX   DXI   IDX*/
        this.opcodes = [["ADC", null, 0x69, null, null, 0x6d, 0x65, null, 0x7d, 0x79, 0x75, 0x61, 0x71],
                        ["AND", null, 0x29, null, null, 0x2d, 0x25, null, 0x3d, 0x39, 0x35, 0x21, 0x31],
                        ["ASL", 0x0a, null, null, null, 0x0e, 0x06, null, 0x1e, null, 0x16, null, null],
                        ["BCC", null, null, null, 0x90, null, null, null, null, null, null, null, null],
                        ["BCS", null, null, null, 0xb0, null, null, null, null, null, null, null, null],
                        ["BEQ", null, null, null, 0xf0, null, null, null, null, null, null, null, null],
                        ["BIT", null, null, null, null, 0x2c, 0x24, null, null, null, null, null, null],
                        ["BMI", null, null, null, 0x30, null, null, null, null, null, null, null, null],
                        ["BNE", null, null, null, 0xd0, null, null, null, null, null, null, null, null],
                        ["BPL", null, null, null, 0x10, null, null, null, null, null, null, null, null],
                        ["BRK", null, null, 0x00, null, null, null, null, null, null, null, null, null],
                        ["BVC", null, null, null, 0x50, null, null, null, null, null, null, null, null],
                        ["BVS", null, null, null, 0x70, null, null, null, null, null, null, null, null],
                        ["CLC", null, null, 0x18, null, null, null, null, null, null, null, null, null],
                        ["CLD", null, null, 0xd8, null, null, null, null, null, null, null, null, null],
                        ["CLI", null, null, 0x58, null, null, null, null, null, null, null, null, null],
                        ["CLV", null, null, 0xb8, null, null, null, null, null, null, null, null, null],
                        ["CMP", null, 0xc9, null, null, 0xcd, 0xc5, null, 0xdd, 0xd9, 0xd5, 0xc1, 0xd1],
                        ["CPX", null, 0xe0, null, null, 0xec, 0xe4, null, null, null, null, null, null],
                        ["CPY", null, 0xc0, null, null, 0xcc, 0xc4, null, null, null, null, null, null],
                        ["DEC", null, null, null, null, 0xce, 0xc6, null, 0xde, null, 0xd6, null, null],
                        ["DEX", null, null, 0xca, null, null, null, null, null, null, null, null, null],
                        ["DEY", null, null, 0x88, null, null, null, null, null, null, null, null, null],
                        ["EOR", null, 0x49, null, null, 0x4d, 0x45, null, 0x5d, 0x59, 0x55, 0x41, 0x51],
                        ["INC", null, null, null, null, 0xee, 0xe6, null, 0xfe, null, 0xf6, null, null],
                        ["INX", null, null, 0xe8, null, null, null, null, null, null, null, null, null],
                        ["INY", null, null, 0xc8, null, null, null, null, null, null, null, null, null],
                        ["JMP", null, null, null, null, 0x4c, null, null, null, null, null, null, null],
                        ["JSR", null, null, null, null, 0x20, null, null, null, null, null, null, null],
                        ["LDA", null, 0xa9, null, null, 0xad, 0xa5, null, 0xbd, 0xb9, 0xb5, 0xa1, 0xb1],
                        ["LDX", null, 0xa2, null, null, 0xae, 0xa6, null, null, 0xbe, null, null, null],
                        ["LDY", null, 0xa0, null, null, 0xac, 0xa4, null, 0xbc, null, 0xb4, null, null],
                        ["LSR", 0x4a, null, null, null, 0x4e, 0x46, null, 0x5e, null, 0x56, null, null],
                        ["NOP", null, null, 0xea, null, null, null, null, null, null, null, null, null],
                        ["ORA", null, 0x09, null, null, 0x0d, 0x05, null, 0x1d, 0x19, 0x15, 0x01, 0x11],
                        ["PHA", null, null, 0x48, null, null, null, null, null, null, null, null, null],
                        ["PHP", null, null, 0x08, null, null, null, null, null, null, null, null, null],
                        ["PLA", null, null, 0x68, null, null, null, null, null, null, null, null, null],
                        ["PLP", null, null, 0x28, null, null, null, null, null, null, null, null, null],
                        ["ROL", 0x2a, null, null, null, 0x2e, 0x26, null, 0x3e, null, 0x36, null, null],
                        ["ROR", 0x6a, null, null, null, 0x7e, 0x66, null, 0x6e, null, 0x76, null, null],
                        ["RTI", null, null, 0x40, null, null, null, null, null, null, null, null, null],
                        ["RTS", null, null, 0x60, null, null, null, null, null, null, null, null, null],
                        ["SBC", null, 0xe9, null, null, 0xed, 0xe5, null, 0xfd, 0xf9, 0xf5, 0xe1, 0xf1],
                        ["SEC", null, null, 0x38, null, null, null, null, null, null, null, null, null],
                        ["SED", null, null, 0xf8, null, null, null, null, null, null, null, null, null],
                        ["SEI", null, null, 0x78, null, null, null, null, null, null, null, null, null],
                        ["STA", null, null, null, null, 0x8d, 0x85, null, 0x9d, 0x99, 0x95, 0x81, 0x91],
                        ["STX", null, null, null, null, 0x8e, 0x86, null, null, null, null, null, null],
                        ["STY", null, null, null, null, 0x8c, 0x84, null, null, null, 0x94, null, null],
                        ["TAX", null, null, 0xaa, null, null, null, null, null, null, null, null, null],
                        ["TAY", null, null, 0xa8, null, null, null, null, null, null, null, null, null],
                        ["TSX", null, null, 0xba, null, null, null, null, null, null, null, null, null],
                        ["TXA", null, null, 0x8a, null, null, null, null, null, null, null, null, null],
                        ["TXS", null, null, 0x9a, null, null, null, null, null, null, null, null, null],
                        ["TYA", null, null, 0x98, null, null, null, null, null, null, null, null, null]];
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
