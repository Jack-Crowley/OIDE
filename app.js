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
app.use( express.urlencoded({ extended: false }) );

app.set( "views",  __dirname + "/views");
app.set( "view engine", "ejs" );

const getAccountID = fs.readFileSync(__dirname + "\\db\\queries\\SelectAccountID.sql", { encoding: "UTF-8" })
const selectRepos = fs.readFileSync(__dirname + "\\db\\queries\\selectRepos.sql", { encoding: "UTF-8" })
const createAccount = fs.readFileSync(__dirname + "\\db\\queries\\insertAccount.sql", { encoding: "UTF-8" })
const createRepo = fs.readFileSync(__dirname + "\\db\\queries\\insertRepo.sql", { encoding: "UTF-8" })

app.post("/addrepo/", ( req, res ) => {
    let data = JSON.parse(JSON.stringify(req.oidc.user))
    db.execute(getAccountID, [data.email], (error, results) => {
        if (error) 
            throw error;
        if (results.length != 0) {
            let idString = JSON.stringify(results).toString()
            let id = JSON.parse(idString.substring(1, idString.length-1)).id
            db.execute(createRepo, [req.body.repoName, id, Math.floor(Math.random()*16777215).toString(16)], (error, resu) => { 
                db.execute(selectRepos, [id], (error, resu) => { 
                    res.redirect("/repos")
                });
            });
        }
        else {
            db.execute(createAccount, [data.nickname, data.email]);
            res.send("Account Created")
        }
    });
})

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
    db.execute(getAccountID, [data.email], (error, results) => {
            if (error) 
                throw error;
            if (results.length != 0) {
                let idString = JSON.stringify(results).toString()
                let id = JSON.parse(idString.substring(1, idString.length-1)).id
                db.execute(selectRepos, [id], (error, resu) => { 
                    res.render("repos", {picture : data.picture, repos : JSON.stringify(resu).toString()})
                });
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