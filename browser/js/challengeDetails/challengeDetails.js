app.config(function($stateProvider){

	$stateProvider.state('challengeDetail', {
		url: '/challanges/:id',
		templateUrl: 'js/challengeDetails/challengeDetails.html',
		resolve: {
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			}
		},
		controller: 'OneChallengeCtrl'
	});

});

