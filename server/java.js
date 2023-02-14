const {exec} = require('child_process')

module.exports = {
    recieveMessageJava : function (st, ws) {
        let fileName = st.split("public class ")[1].split(" ")[0];
        exec(`echo '${st}' > ${fileName}.java`, (error, stdout, stderr) => {
            exec(`javac ${fileName}.java`, (error, stdout, stderr) => {
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
            exec(`java ${fileName}.java`, (error, stdout, stderr) => {
                let msg = {head: "out", msg: stdout};
                console.log(stdout)
                ws.send(JSON.stringify(msg));
            })
        });
    }
}