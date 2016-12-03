'use strict';
var router = require('express').Router();

var User = require('../../../db/models/user.js');
var Challenge = require('../../../db/models/challenge.js');

module.exports = router;

router.post('/', (req, res, next) => {

    return User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(user => {
          if (user) res.send('exists');

          return User.create({
            email: req.body.email,
            password: req.body.password
          });
        })
        .catch(next);
});

router.get('/:id', (req, res, next) => {

  return User.findOne({
    where: {
      id: req.params.id
    },
    include: [{model: Challenge}]
  })
  .then(function(user){
    res.send(user);
  })
  .catch(next);

});

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
