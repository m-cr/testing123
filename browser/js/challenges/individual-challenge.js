app.config(function($stateProvider){

	$stateProvider.state('individualChallenge', {
		url: '/challenges/:id',
		templateUrl: 'js/challenges/individual-challenge.html',
		resolve: {
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			}
		},
		controller: 'OneChallengeCtrl'
	});

});

app.controller('OneChallengeCtrl', function($scope, challenge, $http){
	$scope.challenge = challenge;

	$scope.submit = function(code, testCode){
		var newCode = `var mocha = require("mocha");\nvar expect = require("chai").expect;\n${code}\n${testCode}`;
		// console.log(newCode);
		return $http.post('/api/submit', {code: newCode})
			.then(function(response){
				$scope.response = '';
				$scope.longerResponse = '';
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

	// $scope.passing = 'test';
	// if($scope.response){
	// 	$scope.passing = $scope.response[$scope.response.length-1];
	// }

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
