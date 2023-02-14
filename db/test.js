const db = require("./connect");
const fs = require("fs")

const getAccountName=fs.readFileSync(__dirname + "\\queries\\insertRepo.sql", { encoding: "UTF-8" })
const read_stuff_table_sql = `select * from repo where email="a"`;

db.execute(getAccountName, ["TestRepo",2], 
    (error, results) => {
        if (error) 
            throw error;
        console.log(results)
    }
);

db.end()