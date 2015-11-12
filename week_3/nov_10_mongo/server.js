var express = require('express'),
    app = express();

// require mongoose
var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/codefellows');

// access the mongoose schema object
var Schema = mongoose.Schema;

// create a schema
var cfSchema = new Schema({
    course: String,
    active: Boolean,
    length: Number
});

// create model based off of schema
var CfModel = mongoose.model('CfModel', cfSchema);

// create a new jsda course
var currentCourse = CfModel({
    course: 'Full Stack Javascript',
    active: true,
    length: 8
});

currentCourse.save(function (err) {
    if (err) throw err;
    console.log('saved course');
});

// get items in database
CfModel.find({ course: 'Javascript' }, function (err, course) {
    if (err) throw err;
    console.log('Single Course: ' + course);
});

app.listen(3000);