app.config(function($stateProvider){

	$stateProvider.state('tutorial', {
		url: '/tutorial/:id',
		templateUrl: './js/tutorial/tutorial.html',
		resolve: {
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			}
		}
	});

});
