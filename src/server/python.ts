import { exec } from "child_process";

export async function recieveMessage(str : string) : Promise<string> {
    let finalOut : string = "Default";
    exec(`echo '${str}' > r.py`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            finalOut = error.message;
            return `error: ${error.message}`
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            finalOut = stderr;
            return `stderr: ${stderr}`
        }
        exec(`python r.py`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                finalOut = error.message;
                return `error: ${error.message}`
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                finalOut = stderr;
                return `stderr: ${stderr}`;
            }
            console.log(`Success with ${stdout}`)
            finalOut=stdout;
            return stdout
        });
    });
    return finalOut;
}