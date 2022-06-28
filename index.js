var express = require('express');
var app = express();

app.use(express.static(__dirname+ '/docs'));


app.listen(8091, () => console.log('Listening on 8091'));