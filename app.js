const express = require( "express" );
const logger = require("morgan");
const dotenv = require('dotenv');
const db = require("./db/connectPool")
const fs = require("fs")
const app = express();
const port = 3000;

const { auth, requiresAuth } = require('express-openid-connect');

dotenv.config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(logger("dev"));

app.use('/module', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(auth(config));

app.set( "views",  __dirname + "/views");
app.set( "view engine", "ejs" );

const getAccountID = fs.readFileSync(__dirname + "\\db\\queries\\SelectAccountID.sql", { encoding: "UTF-8" })
const selectRepos = fs.readFileSync(__dirname + "\\db\\queries\\selectRepos.sql", { encoding: "UTF-8" })
const createAccount = fs.readFileSync(__dirname + "\\db\\queries\\insertAccount.sql", { encoding: "UTF-8" })

app.get('/', (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        res.render("homeLoggedOut")
    }
    else {
        let data = JSON.parse(JSON.stringify(req.oidc.user));
        let pic = data.picture
        if (typeof pic == "undefined") {
            pic="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        }
        res.render("homeLoggedIn", {pic : pic})
    }
});

app.get( "/repo", ( req, res ) => {
    res.render("editor");
} );

app.get( "/repos", requiresAuth(), ( req, res ) => {
    let data = JSON.parse(JSON.stringify(req.oidc.user))
    db.execute(getAccountID, [data.email], 
        (error, results) => {
            console.log(results)
            if (error) 
                throw error;
            if (results.length != 0) {
                res.send(JSON.stringify(results))
            }
            else {
                db.execute(createAccount, [data.nickname, data.email]);
                res.send("Account Created")
            }
        }
    );
    
} );


app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );