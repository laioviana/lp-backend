var express = require('express');
var consign = require('consign');
var cors = require('cors')
var bodyParser = require('body-parser');

module.exports = function () {

    var corsOptions = {
        origin: '*'
    }
    var app = express();
    app.use(cors(corsOptions))

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    consign({ cwd: 'api' })
        .then('routes')
        .into(app);

    return app;

}