var express = require('express')

var validator = require('validator');

var app = module.exports = express();

var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

        extended: true

}));

app.listen(5000);
