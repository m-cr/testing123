'use strict';
var fs = require('fs');
var router = require('express').Router(); // eslint-disable-line new-cap
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

router.use('/members', ensureAuthenticated, require('./members'));
router.use('/users', require('./users'));
router.use('/challenges', require('./challenges'));
router.use('/trophies', require('./trophies'));


router.post('/submit', function(req, res, next){

	fs.writeFile('./testSpec.js', req.body.code, function (error) {
		// console.log(req.body.code);
		if (error) console.log(error);

		var exec = require('child_process').exec;
		exec('node_modules/mocha/bin/mocha ./testSpec.js && rm ./testSpec.js', function (err, stdout, stderr) {
			if (stdout) {
				res.send(stdout);
			} else if (!stdout && err) {
				console.log('error: ');
				console.log(err);
				if (stderr) console.log(stderr);
				var realError = {
					message: 'Either your test code or start code has some sort of syntax error. Look at the error stack below to find out where.',
					errStack: err.stack
				};
				res.send(realError);
			} else {
				console.log('else');
			}
		});
	});

});

router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
