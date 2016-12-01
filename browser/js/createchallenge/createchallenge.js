app.config(function($stateProvider){

	$stateProvider.state('createchallenge', {
		url: '/createchallenge',
		templateUrl: 'js/createchallenge/createchallenge.html',
		controller: 'CreateChallengeCtrl'
	});

});

app.controller('CreateChallengeCtrl', function($scope, Challenge){

	$scope.codeEditorOptions = {
		lineNumbers: true,
		mode: 'javascript'
	};

	$scope.testEditorOptions = {
		lineNumbers: true,
		mode: 'javascript'
	};

	$scope.challenge = {
		code: `//add in some code to be tested\n//the user will not be able to edit this code\n//example\n\nvar foo = 'bar';`,
		testCode: `//write some incomplete test code with\n//extra comments about how the tests should work\n//example:\n\ndescribe('foo', function(){\n\tit('should equal bar', function(done){\n\t\texpect(foo).to.equal('bar');\n\t\t//TODO: something very important needs to be added here!\n\t\t//HINT: something needs to be called...\n\t});\n});`,
		solution: `//add your solution here!\n\ndescribe('foo', function(){\n\tit('should equal bar', function(done){\n\t\texpect(foo).to.equal('bar');\n\t\tdone();\n\t});\n});`,
		difficulty: 'easy'
	};

	// $scope.code = `//add in some code to be tested\n//the user will not be able to edit this code\n//example\n\nvar foo = 'bar';`;
	// $scope.testCode = `//write some incomplete test code with\n//extra comments about how the tests should work\n//example:\n\ndescribe('foo', function(){\n\tit('should equal bar', function(done){\n\t\texpect(foo).to.equal('bar');\n\t\t//TODO: something very important needs to be added here!\n\t\t//HINT: something needs to be called...\n\t});\n});`;
	// $scope.solution = `//add your solution here!\n\ndescribe('foo', function(){\n\tit('should equal bar', function(done){\n\t\texpect(foo).to.equal('bar');\n\t\tdone();\n\t});\n});`;

	$scope.submit = Challenge.create;

});
