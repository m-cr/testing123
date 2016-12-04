'use strict';
var router = require('express').Router();

var User = require('../../../db/models/user.js');
var Challenge = require('../../../db/models/challenge.js');
var Trophy = require('../../../db/models/trophy.js');

module.exports = router;

router.get('/', function(req, res, next){

  return User.findAll({
    include: [Challenge]
  })
  .then(function(users){
    console.log(users);
    res.send(users);
  })
  .catch(next);

});

router.post('/', function(req, res, next){

  if (req.body.firstName && req.body.lastName) {
    return User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
          if (user) {
            res.send('exists');
          }

          return User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.firstName + ' ' + req.body.lastName
          });
        })
        .then(createdUser => {
          res.send(createdUser);
        })
        .catch(next);
  }
  else {
    return User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
          if (user) {
            res.send('exists');
          }

          return User.create({
            email: req.body.email,
            password: req.body.password,
          });
        })
        .then(createdUser => {
          res.send(createdUser);
        })
        .catch(next);
  }
});

router.get('/:id', (req, res, next) => {

  return User.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Trophy,
      include: [Challenge]
    }]
  })
  .then(function(user){
    user.score = user.trophies.length;
    return user.save();
  })
  .then(function(user){
    res.send(user);
  })
  .catch(next);

});

router.get('/:id/challenges', (req, res, next) => {
  Challenge.findAll({
    where: {
      authorId: req.params.id
    }
  })
  .then(function(challenges){
    console.log(challenges);
    res.send(challenges);
  })
  .catch(next);
});

