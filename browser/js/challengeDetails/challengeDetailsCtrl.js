app.controller('ChallengeDetailsCtrl', function($scope, Challenge){

	var $ctrl = this;

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
		mode: 'javascript'
	};


	$scope.codeEditorOptions = {
		lineNumbers: true,
		mode: 'javascript',
		readOnly: 'nocursor'
	};

});
