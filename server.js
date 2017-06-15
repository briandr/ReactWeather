var express = require ('express');

// create our app
var app = express();

app.use(express.static('public'));

app.listen(3001, function() {
    console.log('exress server is up on port 3001');
});