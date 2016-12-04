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
		console.log(newCode);
		return $http.post('/api/submit', {code: newCode})
			.then(function(response){
				$scope.response = '';
				$scope.longerResponse = '';
				$scope.passing = '';
				console.log(response);
				console.log(response.data);
				if (response.data.message){
					$scope.response = response.data.message.split('\n');
					$scope.longerResponse = response.data.errStack.split('\n').slice(2);
				} else {
					var output = response.data.split('\n');
					$scope.response = output;
					if(output.length){
						$scope.passing = output[output.length-3];
					}
				}
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
	$scope.testCode = "describe('foo', function(){\n  it ('should return bar', function(){\n    expect(foo()).to.equal('bar');\n  });\n});";
});
