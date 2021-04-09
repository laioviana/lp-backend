var path = require("path");

var app = require(path.join(__dirname, "config", "express"))();

app.listen(3500, function () {
    console.log("Server running on port 3500.");
});

module.exports = app