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
                secondByte = hexAddr & 0xff00;
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
                secondByte = hexAddr & 0xff00;
                programHex[counter++] = firstByte;
                programHex[counter++] = secondByte;
                break;
            
            case AbsIndexedYToken.name:
                programHex[counter++] = opPos[9];
                hexAddr = hexify(addr.addr);
                firstByte = hexAddr & 0xff;
                secondByte = hexAddr & 0xff00;
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
        hexProgram = tokenizedToHex(tokenizeProgram(program));
        for (let i = 0; i < hexProgram.length; i++) {
            
        }
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
        self.running = true;
    }

    i00(){
        self.running = false;
    }
    
    i01(){
        let firstAddr = memory.getVal(self.pc + 1 + self.x);
        let secondAddr = memory.getVal(firstAddr) + (memory.getVal(firstAddr + 1) << 8);
        let val = memory.getVal(secondAddr);
        self.a |= val;
    }
    
    i05(){
        let addr = memory.getVal(self.pc + 1) + (memory.getVal(first))
    }
    
    i06(){
    }
    
    i08(){
    }
    
    i09(){
    }
    
    i0a(){
    }
    
    i0d(){
    }
    
    i0e(){
    }
    
    i10(){
    }
    
    i11(){
    }
    
    i15(){
    }
    
    i16(){
    }
    
    i18(){
    }
    
    i19(){
    }
    
    i1d(){
    }
    
    i1e(){
    }
    
    i20(){
    }
    
    i21(){
    }
    
    i24(){
    }
    
    i25(){
    }
    
    i26(){
    }
    
    i28(){
    }
    
    i29(){
    }
    
    i2a(){
    }
    
    i2c(){
    }
    
    i2d(){
    }
    
    i2e(){
    }
    
    i30(){
    }
    
    i31(){
    }
    
    i35(){
    }
    
    i36(){
    }
    
    i38(){
    }
    
    i39(){
    }
    
    i3d(){
    }
    
    i3e(){
    }
    
    i40(){
    }
    
    i41(){
    }
    
    i45(){
    }
    
    i46(){
    }
    
    i48(){
    }
    
    i49(){
    }
    
    i4a(){
    }
    
    i4c(){
    }
    
    i4d(){
    }
    
    i4e(){
    }
    
    i50(){
    }
    
    i51(){
    }
    
    i55(){
    }
    
    i56(){
    }
    
    i58(){
    }
    
    i59(){
    }
    
    i5d(){
    }
    
    i5e(){
    }
    
    i60(){
    }
    
    i61(){
    }
    
    i65(){
    }
    
    i66(){
    }
    
    i68(){
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
        while (running) {
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
let button = document.getElementById("submit");
let hexProgram;
button.onclick = () => {
    hexProgram = tokenizedToHex(tokenizeProgram(program.value));
    console.log(hexProgram);
}