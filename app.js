require('dotenv').config();
const PORT = process.env.PORT || 3000;

var express = require('express')
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(PORT, function() {
    console.log(`Example app listening on port ${PORT}!`);
})
