const express = require('express');
const path = require('path')
var port = process.env.PORT || 3000;

const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};

app.use(express.static(path.join(__dirname, 'build')));

// Add headers
app.use(allowCrossDomain);
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });



app.listen(port, function(){
    console.log('Servidor corriendo: ' + port);
})