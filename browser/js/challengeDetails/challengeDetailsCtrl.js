app.controller('ChallengeDetailsCtrl', function($scope, $http){

	var $ctrl = this;
	// console.log(this.data);

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
		mode: 'javascript',
		readOnly: 'nocursor'
	};

});