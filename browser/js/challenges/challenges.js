app.config(function ($stateProvider) {

    $stateProvider.state('challenges', {
        url: '/challenges',
        controller: 'ChallengesController',
        templateUrl: 'js/challenges/challenges.html'
    });

});

app.controller('ChallengesController', function($scope){
	$scope.challenges = [1, 2, 3];
});
