const headers : string[] = ["gpp", "gcc", "pyt", "jav", "lnx", "6502"]
export interface JSONMessage {
    head: string
    msg: string
}
// let msg: JSONMessage = new JSONMessage("pyt", "print(\"Hello World\")");
// console.log(JSON.stringify(msg))