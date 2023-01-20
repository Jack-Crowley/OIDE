import { exec} from 'child_process'
import { WebSocket } from "ws";


export async function recieveMessage(str : string, ws : WebSocket) : Promise<void> {
    exec(`echo '${str}' > r.py`, (error, stdout, stderr) => {
        exec(`python r.py`, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                ws.send(""+error);
            }
            else {
                ws.send(stdout);
            }
        });
    });
    
}