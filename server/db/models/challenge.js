'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('challenge', {

  startCode: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  testCode: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  solution: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  difficulty: {
    type: Sequelize.STRING
  }

});
