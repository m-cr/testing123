app.config(function($stateProvider){

	$stateProvider.state('completed', {
		url: '/completed/:id',
		templateUrl: '/js/complete-challenge/complete-challenge.html',
		resolve: { /* @ngInject */
			challenge: function($stateParams, Challenge){
				return Challenge.findOne($stateParams.id);
			},
			trophy: function($stateParams, Challenge, Session){
				return Challenge.getTrophy($stateParams.id, Session.user.id);
			}
		},
		controller: function($scope, challenge, trophy){
			$scope.codeEditorOptions = {
				readOnly: 'nocursor'
			};
			$scope.challenge = challenge;
			$scope.trophy = trophy;
		}
	});

});
