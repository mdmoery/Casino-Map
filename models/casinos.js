var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	_id: Schema.Types.ObjectId,
	casinoKey: String,
	tribe: String,
	casinoName: String,
	latDec: String,
	longDec: String,
	latDeg: String,
	longDeg: String
});

module.exports = mongoose.model('casinos', schema);
