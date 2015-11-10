var express = require('express');
var app = express();

var router = module.exports = express.Router();

router.use(function (req, res, next) {
    console.log('1');
    next();
});

router.use(function (req, res, next) {
    console.log('2');
    next();
});

router.get('/test', function (req, res) {
    console.log('3');
});