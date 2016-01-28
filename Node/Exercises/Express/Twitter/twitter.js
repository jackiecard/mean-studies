/**
 * Created by jackie on 1/28/16.
 */
var url = require("url");
var express = require("express");
var request = require("request");

var app = express();

app.get("/twitter/:username", function(req, resp){
    var username = req.params.username;

    var options = {
        protocol: "http:",
        host: "api.twitter.com",
        pathname: "/1/statuses/user_timeline.json",
        query: {screen_name: username, count: 10}
    };

    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(response);
});