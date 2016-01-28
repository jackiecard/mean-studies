/**
 * Created by jackie on 1/28/16.
 */
var express = require("express");

var app = express();

app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/index.html");
});

app.listen(8080);