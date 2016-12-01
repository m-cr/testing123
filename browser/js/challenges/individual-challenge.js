app.config(function($stateProvider){

	$stateProvider.state('individualChallenge', {
    	url: '/challanges/:id',
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
		readOnly: "nocursor"
	};

});