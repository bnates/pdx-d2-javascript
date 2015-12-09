var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema({
	description: String,
	done: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Task', Task);
