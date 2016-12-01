app.config(function ($stateProvider) {

    $stateProvider.state('challenges', {
        url: '/challenges',
        controller: 'ChallengesController',
        templateUrl: 'js/challenges/challenges.html',
        resolve: {
        	challenges: function(Challenge){
        		return Challenge.findAll();
        	}
        }
    });  

});

app.controller('ChallengesController', function($scope, challenges){
	$scope.challenges = challenges;
});


