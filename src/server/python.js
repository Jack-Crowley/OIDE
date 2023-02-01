"use strict";
exports.__esModule = true;
exports.recieveMessage = void 0;
var child_process_1 = require("child_process");
function recieveMessage(str) {
    (0, child_process_1.exec)("echo '".concat(str, "' > r.py"), function (error, stdout, stderr) {
        if (error) {
            console.log("error: ".concat(error.message));
            return "error: ".concat(error.message);
        }
        if (stderr) {
            console.log("stderr: ".concat(stderr));
            return "stderr: ".concat(stderr);
        }
        (0, child_process_1.exec)("python r.py", function (error, stdout, stderr) {
            if (error) {
                console.log("error: ".concat(error.message));
                return "error: ".concat(error.message);
            }
            if (stderr) {
                console.log("stderr: ".concat(stderr));
                return "stderr: ".concat(stderr);
            }
            return stdout;
        });
    });
}
exports.recieveMessage = recieveMessage;
