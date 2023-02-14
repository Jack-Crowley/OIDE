const {exec} = require('child_process')

module.exports = {
    recieveMessageC : function (st, ws) {
        exec(`echo '${st}' > r.cpp`, (error, stdout, stderr) => {
            exec(`g++ r.c`, (error, stdout, stderr) => {
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
            exec(`./a.out`, (error, stdout, stderr) => {
                let msg = {head: "out", msg: stdout};
                console.log(stdout)
                ws.send(JSON.stringify(msg));
            })
        });
    }
}