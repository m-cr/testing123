app.factory('TutorialService', function(){
	var TutorialService = {};

	TutorialService.advance = function(currentIndex){
		return currentIndex + 1;
	};

	TutorialService.codeEditorOptions = {
			lineNumbers: true,
			mode: 'javascript',
			readOnly: 'nocursor',
			viewportMargin: Infinity
		};

	TutorialService.bodyText = [{
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
		},{
			part: 6,
			body: [`Great! But what’s going on inside that describe block?`,`Let’s take a look at line 2:`],
			code: `it('should return bar', function(){`,
			afterCode: [
			  `This looks a lot like our describe block, doesn’t it?`,
			  `You’ve just met “it”, the basic test case function in Mocha.`,
			  `Like describe, it takes a string that declares what you’re testing and a function that will contain more test code. `,
			  `The plain English style of Mocha & Chai allow you to glance at test code and easily understand what it’s doing.`,
			  `In this case we read the ‘describe’ and ‘it’ blocks’ first parameters together to see what we’re testing: “foo should return bar”.` 
			]
		},{
			part: 7,
			body: [`Now for line 3:`],
			code: `expect(foo()).to.equal('bar');`,
			afterCode: [
			  `This is what is called an assertion.`,
			  `Remember we talked about the “assertion library” Chai? Here it is in action.`,
			  `Chai lets us use “language chains” to create readable assertions for our test code to pass or fail. In this case, we “expect” the result of calling the function ‘foo’ “to equal” the string ‘bar’. If that expectation is met, the test will pass. If not, it will fail.`,
			  `Continue to the next challenge and fill in the test case for a simple function yourself!`
			]
		}, {
			part: 8,
			challengeId: 3
		}, {
			part: 9,
			body: [
			  `There are several assertion styles and types. We’ve been using Chai’s “expect” interface thus far, familiarizing ourselves with “expect,” “to,” and “equal”.`,
			  `Let’s see what else Mocha and Chai can help us test for, besides strict equality.`,
			  `Suppose we have an array with 5  numbers and we want to copy its first two elements into a new array. The code to do that might look something like this: `
			],
			code: `var arr = [0, 1, 2, 3, 4]\nvar newArr = arr.slice(0,2)`,
			afterCode: [
			  `In order to see if this worked, we can test that newArr has a length of 2. We can also test the length of the original array to make sure we didn’t accidentally change it.`,
			  `We can do this with the “lengthOf” assertion and the language chain “have”.`,
			  `Try it out in the next challenge.`
			]
		}, {
			part: 10,
			challengeId: 4
		}, {
			part: 11,
			body: [`Let’s stay with this code to learn something about the 'equal' assertion we used before.`, `Continue on to the next challenge.`]
		}, {
			part: 12,
			challengeId: 5
		}, {
			part: 13,
			body: [
			  `You must have noticed that our first test case failed when we used the 'equal' assertion, and passed when we used 'eql'.`,
			  `That's because 'equal' tests to see if there is 'strict' equality, like the  '===' operator. 'eql' tests for deep equality.`,
			  `Alernatively, you can force 'equal' to check for deep equality by using the chain 'to.deep.equal'.`
			]
		}, {
			part: 14,
			body: [
			  `Now you know some basics of testing Javascript code using Mocha and Chai including 'describe' blocks, 'it' test cases, and a few assertions.`,
			  `Be proud! You've come a long way. Now spend time time exploring the other challenges on the site and maybe contribute a few of your own.`
			]
	}];

	return TutorialService;
});
