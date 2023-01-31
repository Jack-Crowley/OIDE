import { exec} from 'child_process'
import { WebSocket } from "ws";


export function recieveMessage(st, ws) {
    exec(`echo '${str}' > r.py`, (error, stdout, stderr) => {
        exec(`python r.py`, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                ws.send(""+error);
            }
            else {
                if (stdout.includes("\n")) {
                    console.log("Testing")
                }
                ws.send(stdout);
            }
        });
    });
    
}