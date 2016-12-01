var router = require('express').Router();
var Challenge = require('../../../db/models/challenge');
var User = require('../../../db/models/user');

module.exports = router;

router.post('/', function(req, res, next){
	// console.log(req.body);

	var newChallenge = req.body;

	Challenge.create({
		startCode: newChallenge.code,
		testCode: newChallenge.testCode,
		solution: newChallenge.solution,
		difficulty: newChallenge.difficulty
	})
	.then(function(challenge){
		// console.log(challenge);
		res.send(challenge);
	})
	.catch(next);

});

router.get('/', function(req, res, next){
	
	Challenge.findAll(
	//TODO: figure out this include
	// {
	// 	include: [User, {as: 'author'}]
	// }
	)
	.then(function(challenges){
		console.log(challenges);
		res.send(challenges);
	})
	.catch(next);

});

router.get('/:id', function(req, res, next){

	Challenge.findOne({
		where: {
			id: req.params.id
		}
		//TODO: same issue with include
		// include: [User, {as: 'author'}]
	})
	.then(function(challenge){
		res.send(challenge);
	})
	.catch(next);

});