app.controller('ChallengeDetailsCtrl', function($scope, Challenge, Session){

	if (Session.user) $scope.loggedIn = true;

	$scope.toggleSolution = function(){
		if (!$scope.solution) $scope.solution = true;
		else $scope.solution = false;
	};

	var $ctrl = this;

	$scope.getChallenge = function(id){
		return Challenge.findOne(id);
	};

	$scope.submit = function(code, testCode){

		$scope.response = '';
		$scope.longerResponse = '';
		$scope.passing = '';

		return Challenge.submit(code, testCode)
			.then(function(output){
				console.log(output);
				if (output.message){
					$scope.response = output.message.split('\n');
					$scope.longerResponse = output.errStack.split('\n').slice(2);
				} else {
					$scope.response = output.split('\n');
					if (output.length){
						$scope.passing = output.match(/(\d)( passing)/)[1];
						$scope.failing = output.match(/(\d)( failing)/)[1];
					}
				}
			});
	};

	$scope.completeChallenge = Challenge.completeChallenge;

	$scope.testEditorOptions = {
		lineNumbers: true,
		lineWrapping: true,
		mode: 'javascript'
	};


	$scope.codeEditorOptions = {
		lineNumbers: true,
		mode: 'javascript',
		lineWrapping: true,
		readOnly: 'nocursor'
	};

});
