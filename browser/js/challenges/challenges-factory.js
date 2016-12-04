app.factory('Challenge', function($http, Session, $state){

	var Challenge = {};

	var challenges = [];
	var challenge = {};

	Challenge.create = function(newChallenge){
		console.log('factory function');
		return $http.post('/api/challenges', newChallenge)
			.then(function(response){
				console.log('challenge created');
				var createdChallenge = response.data;
				$state.go('created', {id: createdChallenge.id});
			});
	};

	Challenge.findAll = function(){
		return $http.get('/api/challenges')
		.then(function(response){
			// console.log('challenges grabbed');
			// console.log(response.data);
			angular.copy(response.data, challenges);
			// console.log(challenges);
			return challenges;
		});
	};

	Challenge.findOne = function(id){
		return $http.get('/api/challenges/' + id)
		.then(function(response){
			console.log(response.data);
			angular.copy(response.data, challenge);
			return challenge;
		});
	};

	Challenge.getCreatedChallenges = function(){
		return $http.get(`/api/users/${Session.user.id}/challenges`)
			.then(function(response){
				return response.data;
			});
	};

	Challenge.submit = function(code, testCode){
		var newCode = `var mocha = require("mocha");\nvar expect = require("chai").expect;\n${code}\n${testCode}`;
		// console.log(newCode);
		return $http.post('/api/submit', {code: newCode})
			.then(function(response){
				return response.data;
				// $scope.response = '';
				// $scope.longerResponse = '';
				// $scope.passing = '';
				// // console.log(response);
				// // console.log(response.data);
				// if (response.data.message){
				// 	$scope.response = response.data.message.split('\n');
				// 	$scope.longerResponse = response.data.errStack.split('\n').slice(2);
				// } else {
				// 	var output = response.data.split('\n');
				// 	$scope.response = output;
				// 	if (output.length){
				// 		$scope.passing = output[output.length - 3];
				// 	}
				// }
			});
	};

	return Challenge;

});
