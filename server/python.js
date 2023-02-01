const {exec} = require('child_process')

module.exports = {
    recieveMessage : function (st, ws) {
        exec(`echo '${st}' > r.py`, (error, stdout, stderr) => {
            exec(`python r.py`, (error, stdout, stderr) => {
                if (error) {
                    console.log(error);
                    let msg = {head: "err", msg: ""+error};
                    ws.send(JSON.stringify(msg));
                }
                else {
                    if (stdout.includes("\n")) {
                        console.log("Testing")
                    }
                    let msg = {head: "out", msg: stdout};
                    ws.send(JSON.stringify(msg));
                }
            });
        });
        
    }
}