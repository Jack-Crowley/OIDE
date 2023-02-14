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
const selectRepoFromIdea = fs.readFileSync(__dirname + "\\db\\queries\\SelectRepoID.sql", { encoding: "UTF-8" })
const selectFiles = fs.readFileSync(__dirname + "\\db\\queries\\selectFiles.sql", { encoding: "UTF-8" })
const insertFile = fs.readFileSync(__dirname + "\\db\\queries\\insertFile.sql", { encoding: "UTF-8" })
const updateFile = fs.readFileSync(__dirname + "\\db\\queries\\updateFile.sql", { encoding: "UTF-8" })

app.post("/addrepo/", requiresAuth(), ( req, res ) => {
    let data = JSON.parse(JSON.stringify(req.oidc.user))
    db.execute(getAccountID, [data.email], (error, results) => {
        if (error) 
            throw error;
        if (results.length == 0) {
            db.execute(createAccount, [data.nickname, data.email]);
        }
        let idString = JSON.stringify(results).toString()
        let id = JSON.parse(idString.substring(1, idString.length-1)).id
        db.execute(createRepo, [req.body.repoName, req.body.description, id, Math.floor(Math.random()*16777215).toString(16)], (error, resu) => { 
            db.execute(selectRepos, [id], (error, resu) => { 
                res.redirect("/repos")
            });
        });
    });
})

app.post("/addfile/", requiresAuth(), ( req, res ) => {
    console.log("Name: "+req.body.repoName+", Lang: "+req.body.lang+", ID: "+req.body.id)
    let data = JSON.parse(JSON.stringify(req.oidc.user))
    db.execute(insertFile, [req.body.repoName, req.body.lang, "", req.body.id], (error, resu) => { 
        if (error) throw error;
        db.execute(selectRepos, [req.body.id], (error, resu) => { 
            if (error) throw error;
            res.redirect("/editor/"+req.body.id)
        });
    });
})

app.post("/saveFile/", requiresAuth(), ( req, res ) => {
    let json = JSON.parse(req.body.files)
    let files = json.files
    for (let i = 0; i < files.length; i++) {
        db.execute(updateFile, [files[i].text, files[i].id])
    }
    res.redirect("/editor/"+req.body.id)
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

app.get('/repo/:name', requiresAuth(), ( req, res ) => {
    db.execute(selectRepoFromIdea, [req.params.name], (error, results) => {
        if (error) 
            throw error;
        let data = JSON.parse(JSON.stringify(results))
        res.redirect("/editor/"+data[0].id)
    });
});

app.get('/editor/:id', requiresAuth(), ( req, res ) => {
    let data = JSON.parse(JSON.stringify(req.oidc.user))
    db.execute(selectFiles, [req.params.id], (error, resu) => {
        if (error) 
            throw error;
        res.render("editor", {files : JSON.stringify(resu).toString(), id : req.params.id, picture : data.picture})
    });
});


app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );