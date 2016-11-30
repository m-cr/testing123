app.config(function($stateProvider){

	$stateProvider.state('test', {
		url: '/test',
		templateUrl: '/js/test/test.html',
		controller: 'TestCtrl'
	});

});

app.controller('TestCtrl', function($scope, $http){

	$scope.submit = function(code, testCode){
		var newCode = `var mocha = require("mocha");\nvar expect = require("chai").expect;\n${code}\n${testCode}`;
		// console.log(newCode);
		return $http.post('/api/submit', {code: newCode})
			.then(function(response){
				// console.log(response.data);
				$scope.response = response.data.split('\n');
			});
	};

	$scope.testEditorOptions = {
		lineNumbers: true,
		mode: 'javascript'
	};

	$scope.codeEditorOptions = {
		lineNumbers: true,
		mode: 'javascript'
		// readOnly: "nocursor"
	};

	$scope.code = "function foo(){\n  return 'bar';\n}"
	$scope.testCode = "describe('foo', function(){\n  it ('should return bar', function(done){\n    expect(foo()).to.equal('bar');\n    done();\n  });\n});";
});
