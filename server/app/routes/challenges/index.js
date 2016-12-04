var router = require('express').Router();
var Challenge = require('../../../db/models/challenge');
var User = require('../../../db/models/user');

module.exports = router;

var ensureAuthenticated = function (req, res, next) {
    var err;
    if (req.isAuthenticated()) {
        next();
    } else {
        err = new Error('You must be logged in.');
        err.status = 401;
        next(err);
    }
};

router.post('/', ensureAuthenticated, function(req, res, next){

	var newChallenge = req.body;

	Challenge.create({
		title: newChallenge.title,
		difficulty: newChallenge.difficulty,
		description: newChallenge.description,
		startCode: newChallenge.code,
		testCode: newChallenge.testCode,
		solution: newChallenge.solution,
		authorId: req.user.id
	})
	.then(function(challenge){
		// console.log(challenge);
		res.send(challenge);
	})
	.catch(next);

});

router.get('/', function(req, res, next){

	Challenge.findAll({
		include: [{model: User, as: 'author'}]
	})
	.then(function(challenges){
		// console.log(challenges);
		res.send(challenges);
	})
	.catch(next);

});

router.get('/:id', function(req, res, next){

	Challenge.findOne({
		where: {
			id: req.params.id
		},
	    include: [{model: User, as: 'author'}]
	})
	.then(function(challenge){
		res.send(challenge);
	})
	.catch(next);

});
