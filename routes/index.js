var express = require('express');
var router = express.Router();

//var request = require('request');
//var options = {
//    url: "https://api.imgur.com/3/gallery/hot/viral/0.json",
//    headers: {
//        'Authorization': 'Client-ID 5101525199200b1'
//    }
//};
//function callback(error, response, body) {
//    if (!error && response.statusCode == 200) {
//        var info = JSON.parse(body);
//        console.log(info);
//    }
//}
//request(options, callback);

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
