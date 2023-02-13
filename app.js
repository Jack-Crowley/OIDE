const express = require( "express" );
const logger = require("morgan");
const dotenv = require('dotenv');
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

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );