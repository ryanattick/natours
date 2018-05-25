const express = require("express");
const path = require('path');


var app = express();


app.get('/', function(req, res) {
  console.log('/');
    res.sendFile(path.join(__dirname + '/index.html'));
});


// tell your server which port to run on
let port = process.env.PORT || 8000;
app.listen(port);
// print to terminal window
console.log(`Running in localhost at port ${port}!`);
