app.config(function($stateProvider){

	$stateProvider.state('challengeDetail', {
		url: '/challenges/:id',
		template: '<challenge-details challenge="$resolve.challenge"></challenge-details>',
		resolve: {
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			}
		}
	});

});

