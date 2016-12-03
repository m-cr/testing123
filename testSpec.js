var mocha = require("mocha");
var expect = require("chai").expect;
var foo = function(){
  return 'bar';
};
//Try writing your own describe block around this test code for the function “foo”:
	describe('foo', function(){
          it('should return bar', function(){
            expect(foo()).to.equal('bar');
          });
    });
//HINT: the code above goes inside the body of the function that is your describe block’s second parameter.