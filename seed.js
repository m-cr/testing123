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
        startCode: `function foo(){\nreturn 'bar';\n}`,
        testCode:`describe('foo', function(){\n
          it ('should return bar', function(done){\n
              expect(foo()).to.equal('bar');\n
              //run some function here\n
          });\n
          });`,
        solution: `describe('foo', function(){\n
          it ('should return bar', function(done){\n
              expect(foo()).to.equal('bar');\n
              done();\n
          });\n
          });`,
        difficulty: 'easy',
        description: 'our simplest test',
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
