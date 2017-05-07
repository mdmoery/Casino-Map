var Casinos = require('../models/casinos.js');

exports.get = function(req, res, next){
	Casinos.find().select().exec(function(err,data){
		if(err){res.send('Error');}
		else {
            res.json(data);
		}
	});
	return next();
}

// http://mongoosejs.com/docs/queries.html
