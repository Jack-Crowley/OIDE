import { exec } from "child_process";
import {promisify} from "util"

const execute = promisify(exec);


export async function recieveMessage(str : string) : Promise<string> {
    await execute(`echo '${str}' > r.py`);
    try {
        let {stdout, stderr} = await execute(`python r.py`);
        console.log(stderr+":"+stdout)
        return stdout;
    }
    catch {
        console.log("Error");
        return "Error";
    }
}