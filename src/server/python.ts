import { exec } from "child_process";

export function recieveMessage(str : string) {
    exec(`echo '${str}' > r.py`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return `error: ${error.message}`
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return `stderr: ${stderr}`
        }
        exec(`python r.py`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return `error: ${error.message}`
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return `stderr: ${stderr}`;
            }
            return stdout
        });
    });
}