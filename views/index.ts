import {Client} from "../src/client/client.js"
document.querySelector("button")?.addEventListener("click", () => {
    let message = document.querySelector('textarea')?.value as string;
    let client : Client = new Client();
    client.sendMessage("pyt", message)
})