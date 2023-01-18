import { exec } from "child_process";
exec("chown root:OIDE connection.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout)
    // setTimeout(function() {console.log("I eat balls")}, 1000)
});