app.config(function($stateProvider){

	$stateProvider.state('tutorial', {
		url: '/tutorial/:id',
		template: '<challenge-details challenge="$resolve.challenge"></challenge-details>',
		resolve: {
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			}
		}
	});

});
