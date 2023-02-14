let ops = ["ADC", "AND", "ASL", "BCC", "BCS", "BEQ", "BIT", "BMI", "BNE", "BPL", "BRK", "BVC", "BVS", "CLC", "CLD", "CLI", "CLV", "CMP", "CPX", "CPY", "DEC", "DEX", "DEY", "EOR", "INC", "INX", "INY", "JMP", "JSR", "LDA", "LDX", "LDY", "LSR", "NOP", "ORA", "PHA", "PHP", "PLA", "PLP", "ROL", "ROR", "RTI", "RTS", "SBC", "SEC", "SED", "SEI", "STA", "STX", "STY", "TAX", "TAY", "TSX", "TXA", "TXS", "TYA"];
               /* Name   Acc   Imm   Imp   Rel   Abs   ZP    Ind   ABX   ABY   ZPX   DXI   IDX*/
let opcodes =   [["ADC", null, 0x69, null, null, 0x6d, 0x65, null, 0x7d, 0x79, 0x75, 0x61, 0x71],
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
class AbstractInstantiationError extends Error {
    constructor(...args) {
        super("Abstract class cannot be instantiated.", ...args);
    }
}

class AbstractMethodError extends Error {
    constructor(method, ...args) {
        super(`Method ${method.name}() must be implemented.`, ...args);
    }
}

class SyntaxError extends Error {
    constructor(lineNum, line, ...args) {
        super(`Syntax error on line ${lineNum}: ${line}`, ...args);
    }
}

class Token {
    constructor() {
        if (this.constructor == Token) {
            throw new AbstractInstantiationError();
        }
    }
}

class OpToken extends Token {
    constructor(op) {
        super();
        this.op = op;
    }
}

class AccumulatorAddressToken extends Token {
    constructor() {
        super();
    }
}

class ImmediateToken extends Token {
    constructor(value) {
        super();
        this.val = value;
    }
}

class ImpliedToken extends Token {
    constructor() {
        super();
    }
}

class RelativeToken extends Token {
    constructor(offset) {
        super();
        this.offset = offset;
    }
}

class AbsoluteToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

class ZeroPageToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

class AbsIndexedXToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

class AbsIndexedYToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

class ZeroPageIndexedToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

class IndexedIndirectToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

class IndirectIndexedToken extends Token {
    constructor(addr) {
        super();
        this.addr = addr;
    }
}

function tokenizeProgram(programStr) {
    let lines = programStr.split('\n');
    let lineNum = 1;
    let tokenized = [];
    lines.forEach(elm => {
        let trimmed = elm.trimEnd();
        if (ops.includes(trimmed.slice(0, 3))) {
            let op = trimmed.slice(0, 3);
            let addr = trimmed.slice(3).trimEnd().trimStart();
            if (addr === '') {
                if (opcodes[ops.indexOf(op)][1] == null && opcodes[ops.indexOf(op)][3] == null) {
                    throw new SyntaxError(lineNum, elm);
                }
                else if (opcodes[ops.indexOf(op)][1] != null) {
                    tokenized.push([new OpToken(op), new AccumulatorAddressToken()]);
                }
                else {
                    tokenized.push([new OpToken(op), new ImpliedToken()]);
                }
            }
            else if (addr[0] == '(') {
                if (addr.slice(-1) == ')') {
                    if (opcodes[ops.indexOf(op)][11] != null && addr.slice(1, addr.length-1).split(',')[1].trim() === 'X') {
                        tokenized.push([new OpToken(op), new IndexedIndirectToken(addr.slice(1, 4))]);
                    }
                    else {
                        throw new SyntaxError(lineNum, elm);
                    }
                }
                else if (addr.slice(-1) == 'Y') {
                    if (opcodes[ops.indexOf(op)][12] != null && addr.split(',')[1].trim() === 'Y' && addr[4] === ')') {
                        tokenized.push([new OpToken(op), new IndirectIndexedToken(addr.slice(1, 4))]);
                    }
                    else {
                        throw new SyntaxError(lineNum, elm);
                    }
                }
                else {
                    throw new SyntaxError(lineNum, elm);
                }
            }
            else if (addr[0] == '#') {
                if (opcodes[ops.indexOf(op)][2] == null) {
                    throw new SyntaxError(lineNum, elm);
                }
                tokenized.push([new OpToken(op), new ImmediateToken(addr.slice(1, 4))]);
            }
            else if (addr[0] == '$') {
                if (["BCC", "BCS", "BEQ", "BMI", "BNE", "BPL", "BVC", "BVS"].includes(op)) {
                    tokenized.push([new OpToken(op), new RelativeToken(addr.slice(0, 3))]);
                }
                else if (addr.length > 5) {
                    if (opcodes[ops.indexOf(op)][8] != null && addr.slice(-1) === 'X') {
                        tokenized.push([new OpToken(op), new AbsIndexedXToken(addr.slice(0, 5))]);
                    }
                    else if (opcodes[ops.indexOf(op)][9] != null && addr.slice(-1) === 'Y') {
                        tokenized.push([new OpToken(op), new AbsIndexedYToken(addr.slice(0, 5))]);
                    }
                    else {
                        throw new SyntaxError(lineNum, elm);
                    }
                }
                else if (addr.length === 5) {
                    if (opcodes[ops.indexOf(op)][10] != null && addr.slice(-1) === 'X') {
                        tokenized.push([new OpToken(op), new ZeroPageIndexedToken(addr.slice(0, 3))]);
                    }
                    else if (opcodes[ops.indexOf(op)][5] != null) {
                        tokenized.push([new OpToken(op), new AbsoluteToken(addr)]);
                    }
                    else {
                        throw new SyntaxError(lineNum, elm);
                    }
                }
                else if (addr.length == 3) {
                    if (opcodes[ops.indexOf(op)][6] != null) {
                        tokenized.push([new OpToken(op), new ZeroPageToken(addr)]);
                    }
                    else {
                        throw new SyntaxError(lineNum, elm);
                    }
                }
                else {
                    throw new SyntaxError(lineNum, elm);
                }
            }
        }
        else {
            throw new SyntaxError(lineNum, elm);
        }
        lineNum++;
    })
    return tokenized;
}

function hexify(hexStr) {
    return Number("0x" + hexStr.slice(1));
}

function tokenizedToHex(tokenizedArr) {
    let programHex = Array(59904).fill(0);
    let counter = 0;
    tokenizedArr.forEach(elm => {
        let op = elm[0];
        let addr = elm[1];
        let opPos = opcodes[ops.indexOf(op.op)];
        let hexAddr, firstByte, secondByte;
        switch (addr.constructor.name) {
            case AccumulatorAddressToken.name:
                programHex[counter++] = opPos[1];
                break;
            
            case ImmediateToken.name:
                programHex[counter++] = opPos[2];
                programHex[counter++] = hexify(addr.val);
                break;
            
            case ImpliedToken.name:
                programHex[counter++] = opPos[3];
                break;
            
            case RelativeToken.name:
                programHex[counter++] = opPos[4];
                programHex[counter++] = hexify(addr.offset);
                break;
            
            case AbsoluteToken.name:
                programHex[counter++] = opPos[5];
                hexAddr = hexify(addr.addr);
                firstByte = hexAddr & 0xff;
                secondByte = (hexAddr & 0xff00) >> 8;
                console.log(firstByte, secondByte);
                programHex[counter++] = firstByte;
                programHex[counter++] = secondByte;
                break;
            
            case ZeroPageToken.name:
                programHex[counter++] = opPos[6];
                programHex[counter++] = hexify(addr.addr);
                break;
            
            case AbsIndexedXToken.name:
                programHex[counter++] = opPos[8];
                hexAddr = hexify(addr.addr);
                firstByte = hexAddr & 0xff;
                secondByte = (hexAddr & 0xff00) >> 8;
                programHex[counter++] = firstByte;
                programHex[counter++] = secondByte;
                break;
            
            case AbsIndexedYToken.name:
                programHex[counter++] = opPos[9];
                hexAddr = hexify(addr.addr);
                firstByte = hexAddr & 0xff;
                secondByte = (hexAddr & 0xff00) >> 8;
                programHex[counter++] = firstByte;
                programHex[counter++] = secondByte;
                break;
            
            case ZeroPageIndexedToken.name:
                programHex[counter++] = opPos[10];
                programHex[counter++] = hexify(addr.addr);
                break;
            
            case IndexedIndirectToken.name:
                programHex[counter++] = opPos[11];
                programHex[counter++] = hexify(addr.addr);
                break;
            
            case IndirectIndexedToken.name:
                programHex[counter++] = opPos[12];
                programHex[counter++] = hexify(addr.addr);
                break;

        }
    })
    return programHex;
}

class Emulator {
    constructor() {
        this.memory = new Memory();
        this.cpu = new CPU(this.memory);
        this.display = new Display(document.getElementById("screen"));
    }

    showScreen() {
        this.display.show(this.memory);
    }

    inputProgram(program) {
        let hexProgram = tokenizedToHex(tokenizeProgram(program));
        for (let i = 0; i < hexProgram.length; i++) {
            this.memory.setAddr(0x0600 + i, hexProgram[i]);
        }
        console.log(hexProgram);
    }

    run() {
        this.cpu.run_loop();
    }
}
class CPU {
    constructor(memoryObj) {
        this.memory = memoryObj;
        this.sp = 0xFF;
        this.a = 0x00;
        this.x = 0x00;
        this.y = 0x00;
        this.pc = 0x0600;
                     /*NV-BDIZC*/
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
        this.running = true;
    }

    i00(){
        this.running = false;
    }
    
    i01(){
        let firstAddr = this.memory.getVal(this.pc + 1) + this.x;
        let secondAddr = this.memory.getVal(firstAddr) + (this.memory.getVal(firstAddr + 1) << 8);
        let val = this.memory.getVal(secondAddr);
        this.a |= val;
        this.pc += 2;
    }
    
    i05(){
        let addr = this.memory.getVal(this.pc + 1);
        let val = this.memory.getVal(addr);
        this.a |= val;
        this.pc += 2;
    }
    
    i06(){
        let addr = this.memory.getVal(this.pc + 1);
        this.memory.setAddr(addr, this.memory.getVal(addr) << 1);
        this.pc += 2;
    }
    
    i09(){
        let val = this.memory.getVal(this.pc + 1);
        this.a |= val;
        this.pc += 2;
    }
    
    i0a(){
        this.a = this.a << 1;
        this.pc++;
    }
    
    i0d(){
        // TBD
    }
    
    i0e(){
        // TBD
    }
    
    i10(){
        // TBD
    }
    
    i11(){
        // TBD
    }
    
    i15(){
        // TBD
    }
    
    i16(){
        // TBD
    }
    
    i18(){
        // TBD
    }
    
    i19(){
        // TBD
    }
    
    i1d(){
        // TBD
    }
    
    i1e(){
        // TBD
    }
    
    i20(){
        // TBD
    }
    
    i21(){
        // TBD
    }
    
    i24(){
        // TBD
    }
    
    i25(){
        // TBD
    }
    
    i26(){
        // TBD
    }
    
    i28(){
        // TBD
    }
    
    i29(){
        // TBD
    }
    
    i2a(){
        // TBD
    }
    
    i2c(){
        // TBD
    }
    
    i2d(){
        // TBD
    }
    
    i2e(){
        // TBD
    }
    
    i30(){
        // TBD
    }
    
    i31(){
        // TBD
    }
    
    i35(){
        // TBD
    }
    
    i36(){
        // TBD
    }
    
    i38(){
        // TBD
    }
    
    i39(){
        // TBD
    }
    
    i3d(){
        // TBD
    }
    
    i3e(){
        // TBD
    }
    
    i40(){
        // TBD
    }
    
    i41(){
        // TBD
    }
    
    i45(){
        // TBD
    }
    
    i46(){
        // TBD
    }
    
    i48(){
        this.memory.setAddr(0x0100 + this.sp, this.a);
        this.sp--;
        this.pc++;
    }
    
    i49(){
        // TBD
    }
    
    i4a(){
        // TBD
    }
    
    i4c(){
        // TBD
    }
    
    i4d(){
        // TBD
    }
    
    i4e(){
        // TBD
    }
    
    i50(){
        // TBD
    }
    
    i51(){
        // TBD
    }
    
    i55(){
        // TBD
    }
    
    i56(){
        // TBD
    }
    
    i58(){
        // TBD
    }
    
    i59(){
        // TBD
    }
    
    i5d(){
        // TBD
    }
    
    i5e(){
        // TBD
    }
    
    i60(){
        // TBD
    }
    
    i61(){
        let firstAddr = this.memory.getVal(this.pc + 1) + this.x;
        let secondAddr = this.memory.getVal(firstAddr) + (this.memory.getVal(firstAddr + 1) << 8);
        let val = this.memory.getVal(secondAddr);
        this.a = (this.a + val) % 0x100;
        this.pc += 2;
    }
    
    i65(){
        let addr = this.memory.getVal(this.pc + 1);
        let val = this.memory.getVal(addr);
        this.a = (this.a + val) % 0x100;
        this.pc += 2;
    }
    
    i66(){
        // TBD
    }
    
    i68(){
        this.a = this.memory.getVal(--this.sp);
        this.pc += 1;
    }
    
    i69(){
    }
    
    i6a(){
    }
    
    i6c(){
    }
    
    i6d(){
    }
    
    i6e(){
    }
    
    i70(){
    }
    
    i71(){
    }
    
    i75(){
    }
    
    i76(){
    }
    
    i78(){
    }
    
    i79(){
    }
    
    i7d(){
    }
    
    i7e(){
    }
    
    i81(){
    }
    
    i84(){
    }
    
    i85(){
    }
    
    i86(){
    }
    
    i88(){
    }
    
    i8a(){
    }
    
    i8c(){
    }
    
    i8d(){
    }
    
    i8e(){
    }
    
    i90(){
    }
    
    i91(){
    }
    
    i94(){
    }
    
    i95(){
    }
    
    i96(){
    }
    
    i98(){
    }
    
    i99(){
    }
    
    i9a(){
    }
    
    i9d(){
    }
    
    ia0(){
    }
    
    ia1(){
    }
    
    ia2(){
    }
    
    ia4(){
    }
    
    ia5(){
    }
    
    ia6(){
    }
    
    ia8(){
    }
    
    ia9(){
    }
    
    iaa(){
    }
    
    iac(){
    }
    
    iad(){
    }
    
    iae(){
    }
    
    ib0(){
    }
    
    ib1(){
    }
    
    ib4(){
    }
    
    ib5(){
    }
    
    ib6(){
    }
    
    ib8(){
    }
    
    ib9(){
    }
    
    iba(){
    }
    
    ibc(){
    }
    
    ibd(){
    }
    
    ibe(){
    }
    
    ic0(){
    }
    
    ic1(){
    }
    
    ic4(){
    }
    
    ic5(){
    }
    
    ic6(){
    }
    
    ic8(){
    }
    
    ic9(){
    }
    
    ica(){
    }
    
    icc(){
    }
    
    icd(){
    }
    
    ice(){
    }
    
    id0(){
    }
    
    id1(){
    }
    
    id5(){
    }
    
    id6(){
    }
    
    id8(){
    }
    
    id9(){
    }
    
    idd(){
    }
    
    ide(){
    }
    
    ie0(){
    }
    
    ie1(){
    }
    
    ie4(){
    }
    
    ie5(){
    }
    
    ie6(){
    }
    
    ie8(){
    }
    
    ie9(){
    }
    
    iea(){
    }
    
    iec(){
    }
    
    ied(){
    }
    
    iee(){
    }
    
    if0(){
    }
    
    if1(){
    }
    
    if5(){
    }
    
    if6(){
    }
    
    if8(){
    }
    
    if9(){
    }
    
    ifd(){
    }
    
    ife(){
    }

    run_loop() {
        while (this.running) {
            switch(this.memory.getVal(this.pc)) {
                case 0x00:
                    this.i00()
                    break;
                case 0x01:
                    this.i01()
                    break;
                case 0x05:
                    this.i05()
                    break;
                case 0x06:
                    this.i06()
                    break;
                case 0x09:
                    this.i09()
                    break;
                case 0x0a:
                    this.i0a()
                    break;
                case 0x0d:
                    this.i0d()
                    break;
                case 0x0e:
                    this.i0e()
                    break;
                case 0x10:
                    this.i10()
                    break;
                case 0x11:
                    this.i11()
                    break;
                case 0x15:
                    this.i15()
                    break;
                case 0x16:
                    this.i16()
                    break;
                case 0x18:
                    this.i18()
                    break;
                case 0x19:
                    this.i19()
                    break;
                case 0x1d:
                    this.i1d()
                    break;
                case 0x1e:
                    this.i1e()
                    break;
                case 0x20:
                    this.i20()
                    break;
                case 0x21:
                    this.i21()
                    break;
                case 0x24:
                    this.i24()
                    break;
                case 0x25:
                    this.i25()
                    break;
                case 0x26:
                    this.i26()
                    break;
                case 0x28:
                    this.i28()
                    break;
                case 0x29:
                    this.i29()
                    break;
                case 0x2a:
                    this.i2a()
                    break;
                case 0x2c:
                    this.i2c()
                    break;
                case 0x2d:
                    this.i2d()
                    break;
                case 0x2e:
                    this.i2e()
                    break;
                case 0x30:
                    this.i30()
                    break;
                case 0x31:
                    this.i31()
                    break;
                case 0x35:
                    this.i35()
                    break;
                case 0x36:
                    this.i36()
                    break;
                case 0x38:
                    this.i38()
                    break;
                case 0x39:
                    this.i39()
                    break;
                case 0x3d:
                    this.i3d()
                    break;
                case 0x3e:
                    this.i3e()
                    break;
                case 0x40:
                    this.i40()
                    break;
                case 0x41:
                    this.i41()
                    break;
                case 0x45:
                    this.i45()
                    break;
                case 0x46:
                    this.i46()
                    break;
                case 0x48:
                    this.i48()
                    break;
                case 0x49:
                    this.i49()
                    break;
                case 0x4a:
                    this.i4a()
                    break;
                case 0x4c:
                    this.i4c()
                    break;
                case 0x4d:
                    this.i4d()
                    break;
                case 0x4e:
                    this.i4e()
                    break;
                case 0x50:
                    this.i50()
                    break;
                case 0x51:
                    this.i51()
                    break;
                case 0x55:
                    this.i55()
                    break;
                case 0x56:
                    this.i56()
                    break;
                case 0x58:
                    this.i58()
                    break;
                case 0x59:
                    this.i59()
                    break;
                case 0x5d:
                    this.i5d()
                    break;
                case 0x5e:
                    this.i5e()
                    break;
                case 0x60:
                    this.i60()
                    break;
                case 0x61:
                    this.i61()
                    break;
                case 0x65:
                    this.i65()
                    break;
                case 0x66:
                    this.i66()
                    break;
                case 0x68:
                    this.i68()
                    break;
                case 0x69:
                    this.i69()
                    break;
                case 0x6a:
                    this.i6a()
                    break;
                case 0x6c:
                    this.i6c()
                    break;
                case 0x6d:
                    this.i6d()
                    break;
                case 0x6e:
                    this.i6e()
                    break;
                case 0x70:
                    this.i70()
                    break;
                case 0x71:
                    this.i71()
                    break;
                case 0x75:
                    this.i75()
                    break;
                case 0x76:
                    this.i76()
                    break;
                case 0x78:
                    this.i78()
                    break;
                case 0x79:
                    this.i79()
                    break;
                case 0x7d:
                    this.i7d()
                    break;
                case 0x7e:
                    this.i7e()
                    break;
                case 0x81:
                    this.i81()
                    break;
                case 0x84:
                    this.i84()
                    break;
                case 0x85:
                    this.i85()
                    break;
                case 0x86:
                    this.i86()
                    break;
                case 0x88:
                    this.i88()
                    break;
                case 0x8a:
                    this.i8a()
                    break;
                case 0x8c:
                    this.i8c()
                    break;
                case 0x8d:
                    this.i8d()
                    break;
                case 0x8e:
                    this.i8e()
                    break;
                case 0x90:
                    this.i90()
                    break;
                case 0x91:
                    this.i91()
                    break;
                case 0x94:
                    this.i94()
                    break;
                case 0x95:
                    this.i95()
                    break;
                case 0x96:
                    this.i96()
                    break;
                case 0x98:
                    this.i98()
                    break;
                case 0x99:
                    this.i99()
                    break;
                case 0x9a:
                    this.i9a()
                    break;
                case 0x9d:
                    this.i9d()
                    break;
                case 0xa0:
                    this.ia0()
                    break;
                case 0xa1:
                    this.ia1()
                    break;
                case 0xa2:
                    this.ia2()
                    break;
                case 0xa4:
                    this.ia4()
                    break;
                case 0xa5:
                    this.ia5()
                    break;
                case 0xa6:
                    this.ia6()
                    break;
                case 0xa8:
                    this.ia8()
                    break;
                case 0xa9:
                    this.ia9()
                    break;
                case 0xaa:
                    this.iaa()
                    break;
                case 0xac:
                    this.iac()
                    break;
                case 0xad:
                    this.iad()
                    break;
                case 0xae:
                    this.iae()
                    break;
                case 0xb0:
                    this.ib0()
                    break;
                case 0xb1:
                    this.ib1()
                    break;
                case 0xb4:
                    this.ib4()
                    break;
                case 0xb5:
                    this.ib5()
                    break;
                case 0xb6:
                    this.ib6()
                    break;
                case 0xb8:
                    this.ib8()
                    break;
                case 0xb9:
                    this.ib9()
                    break;
                case 0xba:
                    this.iba()
                    break;
                case 0xbc:
                    this.ibc()
                    break;
                case 0xbd:
                    this.ibd()
                    break;
                case 0xbe:
                    this.ibe()
                    break;
                case 0xc0:
                    this.ic0()
                    break;
                case 0xc1:
                    this.ic1()
                    break;
                case 0xc4:
                    this.ic4()
                    break;
                case 0xc5:
                    this.ic5()
                    break;
                case 0xc6:
                    this.ic6()
                    break;
                case 0xc8:
                    this.ic8()
                    break;
                case 0xc9:
                    this.ic9()
                    break;
                case 0xca:
                    this.ica()
                    break;
                case 0xcc:
                    this.icc()
                    break;
                case 0xcd:
                    this.icd()
                    break;
                case 0xce:
                    this.ice()
                    break;
                case 0xd0:
                    this.id0()
                    break;
                case 0xd1:
                    this.id1()
                    break;
                case 0xd5:
                    this.id5()
                    break;
                case 0xd6:
                    this.id6()
                    break;
                case 0xd8:
                    this.id8()
                    break;
                case 0xd9:
                    this.id9()
                    break;
                case 0xdd:
                    this.idd()
                    break;
                case 0xde:
                    this.ide()
                    break;
                case 0xe0:
                    this.ie0()
                    break;
                case 0xe1:
                    this.ie1()
                    break;
                case 0xe4:
                    this.ie4()
                    break;
                case 0xe5:
                    this.ie5()
                    break;
                case 0xe6:
                    this.ie6()
                    break;
                case 0xe8:
                    this.ie8()
                    break;
                case 0xe9:
                    this.ie9()
                    break;
                case 0xea:
                    this.iea()
                    break;
                case 0xec:
                    this.iec()
                    break;
                case 0xed:
                    this.ied()
                    break;
                case 0xee:
                    this.iee()
                    break;
                case 0xf0:
                    this.if0()
                    break;
                case 0xf1:
                    this.if1()
                    break;
                case 0xf5:
                    this.if5()
                    break;
                case 0xf6:
                    this.if6()
                    break;
                case 0xf8:
                    this.if8()
                    break;
                case 0xf9:
                    this.if9()
                    break;
                case 0xfd:
                    this.ifd()
                    break;
                case 0xfe:
                    this.ife()
                    break;
            }
            console.log(this.memory);
        }
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
let program = document.getElementById("program");
let submitbtn = document.getElementById("submit");
let runbtn = document.getElementById("run");
let spText = document.getElementById("sp");
let aText = document.getElementById("a");
let xText = document.getElementById("x");
let yText = document.getElementById("y");
let pcText = document.getElementById("pc");
submitbtn.onclick = () => {
    emu.inputProgram(program.value);
}
runbtn.onclick = () => {
    emu.run();
    spText.innerHTML = `SP: ${emu.cpu.sp}`;
    aText.innerHTML = `A: ${emu.cpu.a}`;
    xText.innerHTML = `X: ${emu.cpu.x}`;
    yText.innerHTML = `Y: ${emu.cpu.y}`;
    pcText.innerHTML = `PC: ${emu.cpu.pc}`;
}