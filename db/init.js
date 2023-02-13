const db = require("./connect");
const fs = require('fs')

const dropSQLFile = fs.readFileSync(__dirname + "\\queries\\dropTableFile.sql", { encoding: "UTF-8" })
db.execute(dropSQLFile);

const dropSQLRepo = fs.readFileSync(__dirname + "\\queries\\dropTableRepo.sql", { encoding: "UTF-8" })
db.execute(dropSQLRepo);

const dropSQLAccount = fs.readFileSync(__dirname + "\\queries\\dropTableAccount.sql", { encoding: "UTF-8" })
db.execute(dropSQLAccount);

const createAccountSQL = fs.readFileSync(__dirname + "\\queries\\createAccountTable.sql", { encoding: "UTF-8" })
db.execute(createAccountSQL);

const createRepoSQL = fs.readFileSync(__dirname + "\\queries\\createRepoTable.sql", { encoding: "UTF-8" })
db.execute(createRepoSQL);

const createFileSQL = fs.readFileSync(__dirname + "\\queries\\createFileTable.sql", { encoding: "UTF-8" })
db.execute(createFileSQL);

const insertAccountSQL = fs.readFileSync(__dirname + "\\queries\\insertAccount.sql", { encoding: "UTF-8" })
db.execute(insertAccountSQL, ['testUser', 'test@gmail.com'])

const read_stuff_table_sql = "SELECT * FROM account";

db.execute(read_stuff_table_sql, 
    (error, results) => {
        if (error) 
            throw error;
    }
);

db.end()