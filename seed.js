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
var Trophy = db.model('trophy');
var Promise = require('sequelize').Promise;
var seededChallenges = require('./seededChallenges');

var seedUsers = function () {

    var users = [
        {
            name: 'Testing Fsa',
            email: 'testing@fsa.com',
            password: 'password',
            score: 1
        },
        {
            name: 'Obama',
            email: 'obama@gmail.com',
            password: 'potus',
            score: 1
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedTrophies = function(){
  var trophies = [
    { 
      userId: 1,
      challengeId: 1,
      submission: 'seeded submission'
    },
    { 
      userId: 2,
      challengeId: 1,
      submission: 'another seeded submission'
    },
    { userId: 1, challengeId: 1}
  ];

  var creatingTrophies = trophies.map(function(trophyObj){
    return Trophy.create(trophyObj);
  });

  return Promise.all(creatingTrophies);
};

var seedChallenges = function () {

    var creatingChallenges = seededChallenges.map(function(challengeObj){
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
    .then(function(){
        return seedTrophies();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
