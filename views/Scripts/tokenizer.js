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

class Token {
    constructor() {
        if (this.constructor == Token) {
            throw new AbstractInstantiationError();
        }
    }
}

class LabelToken extends Token {
    constructor(name, addr) {
        super();
        this.name = name;
        this.addr = addr;
    }
}

class OpToken extends Token {
    constructor(op) {
        /*
        if (this.constructor == OpToken) {
            throw new AbstractInstantiationError();
        }
        */
        super();
        this.op = op;
    }

    eval(val) {
        throw new AbstractMethodError(eval);
    }
}

class AddressToken extends Token {
    constructor(addr) {
        super();
        if (this.constructor == AddressToken) {
            throw new AbstractInstantiationError();
        }
        this.addr = addr;
    }
}


