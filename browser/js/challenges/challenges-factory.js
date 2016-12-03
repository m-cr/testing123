app.factory('Challenge', function($http, Session){

	var Challenge = {};

	var challenges = [];
	var challenge = {};

	Challenge.create = function(newChallenge){
		console.log('factory function');
		return $http.post('/api/challenges', newChallenge)
			.then(function(){
				console.log('challenge created');
			});
	};

	Challenge.findAll = function(){
		return $http.get('/api/challenges')
		.then(function(response){
			console.log('challenges grabbed');
			console.log(response.data);
			angular.copy(response.data, challenges);
			console.log(challenges);
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

	return Challenge;

});
