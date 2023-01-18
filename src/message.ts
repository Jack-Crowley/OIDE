const headers : string[] = ["gpp", "gcc", "pyt", "jav", "lnx", "6502"]
export class JSONMessage {
    private head: string
    private msg: string
    constructor(head: string, msg: string) {
        this.head = head;
        this.msg = msg;
    }
}

let msg: JSONMessage = new JSONMessage("pyt", "print(\"Hello World\")");
console.log(JSON.stringify(msg))