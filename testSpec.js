var mocha = require("mocha");
var expect = require("chai").expect;
function foo(){
  return 'bar';
}
describe('foo', function(){
  it ('should return bar', function(){
    expect(foo()).to.equal('bar');
  });
});