app.component('tutorial', {
	bindings: {},
	templateUrl: './js/tutorial/tutorial.html',
	controller: function(Challenge){
		
		var that = this;
		var challengeIndex = 2;

		this.index = 0;

		this.advance = function(){
			challengeIndex = this.bodyText[this.index].challengeId;
			return that.index++;
		};

		this.codeEditorOptions = {
			lineNumbers: true,
			mode: 'javascript',
			readOnly: 'nocursor',
			viewportMargin: Infinity
		};


		this.bodyText = [{
	  	   part: 0,
		   body: [ 
		     `Welcome to Testing 123. This site has been designed to help you get started writing tests for code.`,
		     `The goal is to become a test-writing wizard, eventually writing tests BEFORE you code like a true "test-driven developer."`
		]},{
			part: 1,
			body: [
			  `The language we are going to be using is Javascript and our testing framework is called Mocha.`,
			  `Mocha is certainly not the only test framework you can use, but it's a fairly simple one to get started with.`,'-----',
			  `We're also going to pull in an "assertion library" called Chai that will allow our tests to read a bit more like spoken English.`
		]},{
			part: 2,
			body: [
			  `Now that we know a bit more about our environment and why we're here, let's get started.`
		]},{
			part: 3,
			body: [
			  `First up is the "describe block." It looks like this:`],
			code: 
			  `\tdescribe("something to describe", function(){\n`
			  +`\t\t//more test code will go here\n`
			  +`\t});`,
			afterCode: [
			  "Describe is a function that takes two parameters, a string that declares what you’re describing,"
			  +" and then a function that will contain more test code.", "Think of it as a way to group and organize your tests."
		]}, {
			part: 4,
			body: [
			  `For instance, if you were going to test a function named “sweetFunction” you might begin your test code for that function with:`
			],
			code: `describe("sweetFunction", function(){});`,
			afterCode: [
			  `Pretty simple, but very useful when you’re looking at your code results and want to keep track of what’s being tested.\n`,
			  `Now it's time for your first test code challenge! Click continue to begin.`
		]}, {
			part: 5,
			challengeId: 2
		}
		];

		Challenge.findOne(challengeIndex)
		  .then(function(challenge){
		  	that.challenge = challenge;
		  })
		  .catch(function(err){
		  	console.log(err);
		  });


     }

});

app.animation('.slide', [function(){
	return {
	  enter: function(element, doneFn) {
	 		   jQuery(element).fadeIn(1000, doneFn);
	   },
	  move: function(element, doneFn) {
	 		       jQuery(element).fadeIn(1000, doneFn);
	   },
	  leave: function(element, doneFn) {
	 		       jQuery(element).fadeOut(1000, doneFn);
	   }
	}
}])