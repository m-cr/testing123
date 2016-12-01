'use strict';
var db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
var User = require('./models/user');
var Challenge = require('./models/challenge');

// if we had more models, we could associate them in this file
// e.g. User.hasMany(Reports)

Challenge.belongsTo(User, {as: 'author'});
