const express = require( "express" );
const logger = require("morgan");
const app = express();
const port = 8080;

app.use(logger("dev"));

app.use('/module', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );