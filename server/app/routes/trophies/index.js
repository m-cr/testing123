var router = require('express').Router();

module.exports = router;

var Trophy = require('../../../db/models/trophy.js');

router.post('/', function(req, res, next){

	Trophy.create({
		submission: req.body.submission,
		userId: req.user.id,
		challengeId: req.body.challengeId
	})
	.then(function(trophy){
		res.send(trophy);
	})
	.catch(next);

});

router.get('/:challengeId/:userId', (req, res, next) => {

	Trophy.findOne({
		where: {
			challengeId: req.params.challengeId,
			userId: req.params.userId
		}
	})
	.then( (trophy) => {
		// console.log(trophy);
		res.send(trophy);
	})
	.catch(next);

});
