var express = require('express');
var router = express.Router();


var cardsModel = require('../models/cards');

//get data

// router.param('email', function(req, res, next, email) {
// 	console.log('email in',email)
//     next();
// });

// router.get('/', function(req, res){
// 	console.log('get email data',req.body,req.params);

// });
router.post('/fetch', function(req, res){
	console.log('get email data',req.body,req.params);
	cardsModel.fetchData(req.body.email, function(err, data){
		if(err){
			if(err.code === 404){
				return res.status(422).send('done');
			}
		}
		return res.status(200).send(data);
	});
});

//handle post
 router.post('/save', function(req,res){
 	console.log('req',req,req.data,req.body);
 	cardsModel.saveData(req.body, function(err, data){
 		console.log('back in saveData');
 		if(err){
 			if(err.code === 11000){
 				console.log('err',err);
 				return res.status(401).send('duplicate email');
 			}
 		}
 		return res.status(200).send('done');
 	});
 });

 module.exports = router;