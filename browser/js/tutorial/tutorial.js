app.config(function($stateProvider){

	$stateProvider.state('tutorial', {
		url: '/tutorial/:id',
		template: '<tutorial></tutorial>'
	});

});
