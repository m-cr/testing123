/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Challenge = db.model('challenge');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedChallenges = function () {

    var challenges = [
      {
        startCode: `function foo(){\n  return 'bar';\n}`,
        testCode:`describe('foo', function(){\n
          it ('should return bar', function(){\n
              expect(foo()).to.equal('bar');\n
              //run some function here\n
          });\n
          });`,
        solution: `describe('foo', function(){\n
          it ('should return bar', function(){\n
              expect(foo()).to.equal('bar');\n
              done();\n
          });\n
          });`,
        difficulty: 'easy',
        title: 'Foo Returns Bar',
        description: 'a simple unit test to help you get started',
        authorId: 1
      },
      {
        startCode: `var arr = [0,1,2,3,4];\nvar slicedArr = arr.slice(0, 2);`,
        testCode: `describe('slice', function(){
          it('should return a shallow copy of a portion of an array', function(){
              expect(slicedArr).to./*see note below*/([0,1]);
          });
          it('should not splice the original array', function(){
            expect(arr).to.have.lengthOf(5);
          });
        });

        //try inserting "equal" here and run the test
        //now try "eql" instead, and see the difference`, 
        solution: `describe('slice', function(){
          it('should return a shallow copy of a portion of an array', function(done){
            expect(slicedArr).to.eql([0,1]);
          });
          it('should not effect the original array', function(){
            expect(arr).to.have.lengthOf(5);
          });
        });

        //"equal" is strict, and behaves like the "===" operator
        //"eql" checks to see if the values are "deep equal"`,
        difficulty: 'easy',
        title: 'Testing Splice',
        description: 'Test a common array method to learn the difference between "equal" and "eql".',
        authorId: 1
      },
      {
        startCode: 
          `var foo = function(){\n  return 'bar';\n};`,
        testCode:
          `//Try writing your own describe block around this test code for the function “foo”:

          it('should return bar', function(){
            expect(foo()).to.equal('bar');
          });\n\n//HINT: the code above goes inside the body of the function that is your describe block’s second parameter.`,
        solution:
          `describe('foo', function(){
            it ('should return bar', function(){
             expect(foo()).to.equal('bar');
            });
          });`,
        difficulty: 'easy',
        title: 'Writing Your First Describe Block',
        description: 'Get familiar with a basic building block of test code.',
        authorId: 1
      }
    ];

    var creatingChallenges = challenges.map(function(challengeObj){
        return Challenge.create(challengeObj);
    });

    return Promise.all(creatingChallenges);
};

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function(){
        return seedChallenges();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
