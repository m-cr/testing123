'use strict';
var fs = require('fs');
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;

router.use('/members', require('./members'));
router.use('/users', require('./users'));
router.use('/challenges', require('./challenges'));


router.post('/submit', function(req, res, next){
	//create file
	fs.writeFile('./testSpec.js', req.body.code, function (error) {
		console.log(req.body.code);
		if (error) return next(error);
		// run child process
		var exec = require('child_process').exec;
		exec('node_modules/mocha/bin/mocha ./testSpec.js', function (err, stdout, stderr) {
			if (err) {
				console.log(err);
			}
			else if (stderr) {
				console.log(stderr);
				res.send(stderr);
			}
			// console.log(stdout);
			res.send(stdout);
		});
	});
	
});

router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
