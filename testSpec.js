var mocha = require("mocha");
var expect = require("chai").expect;
var Obama = 'biden'
describe('obama', function(){
	it('should equal biden', function(){
		expect(Obama).to.equal('biden');
	});
});