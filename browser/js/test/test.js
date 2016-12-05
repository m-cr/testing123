app.config(function($stateProvider){

	$stateProvider.state('test', {
		url: '/test',
		templateUrl: '/js/test/test.html',
		resolve: { /* @ngInject */
			challenge: function(){
				return {
					startCode: "function foo(){\n  return 'bar';\n}",
					testCode: "describe('foo', function(){\n  it ('should return bar', function(){\n    expect(foo()).to.equal('bar');\n  });\n});"
				};
			}
		}
	});

});
