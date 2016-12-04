app.config(function($stateProvider){
	$stateProvider.state('created', {
		url: '/created/:id',
		templateUrl: '/js/created/created.html',
		resolve: { /** @ngInject */
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			}
		},
		controller: function($scope, challenge){
			$scope.challenge = challenge;
		}
	});
});
