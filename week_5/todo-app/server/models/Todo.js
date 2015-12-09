var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	description: String,
	done: String
}, { timestamps: true } );

module.exports = mongoose.model('Todo', Todo);
