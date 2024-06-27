const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//use body-parser middleware to handle url encoded data
app.use(bodyParser.urlencoded({extended: false}));

// Serve the HTML form at the root route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Test Form</title>
    </head>
    <body>
      <form action="/name" method="POST">
        <label for="first">First Name:</label>
        <input type="text" id="first" name="first" required>
        <br>
        <label for="last">Last Name:</label>
        <input type="text" id="last" name="last" required>
        <br>
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `);
});

// Example route to test GET requests
app.get('/name', function(req, res) {
  const firstName = req.query.first;
  const lastName = req.query.last;
  const fullName = `${firstName} ${lastName}`;
  res.json({ name: fullName });
});
app.use(bodyParser.json());

// Example route to test POST requests
app.post('/name', function(req, res) {
  const firstName = req.body.first;
  const lastName = req.body.last;
  const fullName = `${firstName} ${lastName}`;
  res.json({ name: fullName });
});

/*const express = require("express");
const app = express();

app.get("/name", function(req, res){
  const firstName = req.query.first;
  const lastName  = req.query.last;
  const fullName  = `${firstName} ${lastName}`;
  res.json({name: fullName})
});

app.use(express.json());

app.post("/name", function(req, res){
  const firstName = req.body.first;
  const lastName = req.body.last;
  const fullName = `${firstName} ${lastName}`;
  res.json({name: fullName});

});*/

/*const express = require("express");
const app = express();

app.get("/:word/echo", function(req, res){
  const word = req.params.word;
  res.json({echo : word});
});*/

/*const express = require("express");
const app = express();

function addCurrentTime(req, res, next){
  req.time = new Date().toString();
  next();
}
/*final handler to send current time*/
/*function sendCurrentTime(req, res){
  res.json({time: req.time})
}
app.get("/now", addCurrentTime, sendCurrentTime);*/
/*require('dotenv').config();*/
/*const express = require('express');
const app = express();

// Logger middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // Pass control to the next middleware or route handler
}
// Mount the logger middleware at the root level
app.use(logger);

app.get("/", function(req,res){
    res.send("Hello world");
});*/


/*app.get("/json", (req, res) => {
    var response = "Hello json".toUpperCase(); // now becomes "HELLO WORLD"
    if (process.env.MESSAGE_STYLE === "allCaps") {
        response = "Hello json".toUpperCase();
      } else {
        response = "Hello json";
      }

    // Send JSON response with the message
    res.json({ message: response });
});*/
// Load environment variables from .env file

/*app.get('/json', (req, res) => {
    /*const messageStyle = process.env.MESSAGE_STYLE;
    let message = "Hello json";
  
    if (process.env.MESSAGE_STYLE === "uppercase") {
      message = message.toUpperCase();
    } else if (process.env.MESSAGE_STYLE === "lowercase") {
      message = message.toLowerCase();
    }
  
    res.json({ 
      message: message
    });
});*/ 
/*app.get("/json", (req, res)=> {
    res.json({ 
        message: "Hello json"
    });
});*/
/*app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));*/
/*app.use("/", function(req, res){
    express.static(__dirname + /public/style.css)
});*/




































 module.exports = app;
