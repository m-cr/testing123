app.component('tutorial', {
	bindings: {},
	templateUrl: './js/tutorial/tutorial.html',
	controller: function(Challenge, TutorialService){
		
		var that = this;
		var challengeIndex = 2;

		this.index = 0;

		this.codeEditorOptions = TutorialService.codeEditorOptions;

		this.bodyText = TutorialService.bodyText;

		this.advance = function(){
			challengeIndex = this.bodyText[this.index + 1].challengeId;
			if(challengeIndex){
				getChallenge();
			}
			return that.index++;
		};

		this.rewind = function(){
			return that.index--;
		};

		var getChallenge = function(){
			Challenge.findOne(challengeIndex)
			  .then(function(challenge){
			  	that.challenge = challenge;
			  })
			  .catch(function(err){
			  	console.log(err);
			  });
		};

     }

});