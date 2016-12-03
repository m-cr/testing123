// var expect = require('chai').expect();

// var Sequelize = require('sequelize');
// var db = require('../../../server/db');

// var User = db.model('user');
// var Challenge = db.model('challenge');
// var Trophy = db.model('trophy');

// describe('Challenge Model', function(){

// 	var obama;

// 	beforeEach('syncDB', function(){
// 		return db.sync({ force: true });
// 	});

// 	beforeEach('get Obama', function(){
// 		return User.findAll(
// 		// {
// 		// 	where: {
// 		// 		email: 'obama@gmail.com'
// 		// 	},
// 		// 	include: [{
// 		// 		model: Trophy,
// 		// 		include: [Challenge]
// 		// 	}]
// 		// }
// 		)
// 		.then(function(_obama){
// 			console.log(_obama);
// 			obama = _obama;
// 		});
// 	});

// 	describe('score field', function(){
// 		it('should get the score from the number of trophies', function(done){
// 			expect(obama.score).to.be(1);
// 			done();
// 		});
// 	});

// });

// // var challengePromise = Challenge.create({
// //   startCode: `function foo(){\nreturn 'bar';\n}`,
// //   testCode:`describe('foo', function(){\n
// //     it ('should return bar', function(done){\n
// //         expect(foo()).to.equal('bar');\n
// //         //run some function here\n
// //     });\n
// //     });`,
// //   solution: `describe('foo', function(){\n
// //     it ('should return bar', function(done){\n
// //         expect(foo()).to.equal('bar');\n
// //         done();\n
// //     });\n
// //     });`,
// //   title: 'SimpleTest',
// //   difficulty: 'easy',
// //   description: 'our simplest test',
// //   authorId: 1
// // });

// // var trophyPromise = Trophy.create({
// //     authorId: 
// // });