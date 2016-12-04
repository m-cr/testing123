'use strict';

var db = require('../_db');

var Sequelize = require('sequelize');

module.exports = db.define('trophy', {
	submission: Sequelize.STRING
});
