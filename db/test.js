const db = require("./connect");
const fs = require("fs")

const getAccountName=fs.readFileSync(__dirname + "\\queries\\selectAccountID.sql", { encoding: "UTF-8" })
const read_stuff_table_sql = `select * from account where email="a"`;

db.execute(getAccountName, ["test@gmail.com"], 
    (error, results) => {
        if (error) 
            throw error;
        console.log(results)
    }
);

db.end()