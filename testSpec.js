var mocha = require("mocha");
var expect = require("chai").expect;
var arr = [0, 1, 2, 3, 4];
var newArr = arr.slice(0, 2);
describe ('lengthOf', function(){
	it ('should correctly test the length of the new array', function(){
		expect(newArr).to.have.lengthOf(3);
	});
	it('should correctly test the length of the old array', function(){
		expect(arr).to.have.lengthOf(5);
	});
});