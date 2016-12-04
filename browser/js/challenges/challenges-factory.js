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
			angular.copy(response.data, challenge);
			challenge.required = 1;
			console.log(challenge);
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
			});
	};

	Challenge.completeChallenge = function(completedChallenge){
		// console.log('in complete challenge');
		return $http.post('/api/trophies', completedChallenge)
			.then(function(response){
				var newTrophy = response.data;
				// console.log(newTrophy);
				// return newTrophy;
				$state.go('completed', {id: newTrophy.challengeId});
			});
	};

	Challenge.getTrophy = function(challengeId, userId){
		// console.log('in get trophy');
		return $http.get(`/api/trophies/${challengeId}/${userId}`)
			.then(function(response){
				console.log(response.data);
				return response.data;
			});
	};

	return Challenge;

});
