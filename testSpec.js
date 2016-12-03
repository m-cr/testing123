var mocha = require("mocha");
var expect = require("chai").expect;
function foo(){
return 'bar';
}
describe('foo', function(){

          it ('should return bar', function(done){

              expect(foo()).to.equal('bar');

              //run some function here

          });
          
});