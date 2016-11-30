'use strict';
var fs = require('fs');
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;

router.use('/members', require('./members'));

router.post('/submit', function(req, res, next){
	//create file
	fs.writeFile('./testSpec.js', req.body.code, function (error) {
		// console.log(req.body.code);
		if (error) return next(error);
		// run child process
		var exec = require('child_process').exec;
		exec('node_modules/mocha/bin/mocha ./testSpec.js', function (err, stdout, stderr) {
			if (err) return next(err);
			console.log(stdout);
			if (stderr) {
				console.log(stderr);
				res.send('there was an error');
			}
			res.send(stdout);
		});

	});

});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
