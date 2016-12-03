var seededChallenges = [
	{
	  startCode: 
	    `function foo(){\n  return 'bar';\n}`,
	  testCode:
	    `describe('foo', function(){\n`
	    +`\tit ('should return bar', function(){\n`
	    +`\t\texpect(foo()).to.equal('bar');\n\t});\n});`,
	  solution: 
	    `describe('foo', function(){\n`
	    +`\tit ('should return bar', function(){\n`
	    +`\t\texpect(foo()).to.equal('bar');\n\t});\n});`,
	  difficulty: 'Beginner',
	  title: 'Foo Returns Bar',
	  description: 'a simple unit test to help you get started',
	  authorId: 1
	},{
	  startCode: 
	    `var foo = function(){\n  return 'bar';\n};`,
	  testCode:
	    `//Try writing your own describe block around this test code\n//for the function “foo”:\n\n`
	    +`\tit('should return bar', function(){\n`
	    +`\t\texpect(foo()).to.equal('bar');\n\t});\n\n`
	    +`//HINT: the code above goes inside the body of the function\n//that is your describe block’s second parameter.`,
	  solution:
	    `describe('foo', function(){\n`
	    +`\tit ('should return bar', function(){\n`
	    +`\t\texpect(foo()).to.equal('bar');\n\t});\n});`,
	  difficulty: 'Beginner',
	  title: 'Writing Your First Describe Block',
	  description: 'Get familiar with a basic building block of test code.',
	  authorId: 1
	},{
	  startCode:
	    `//Here is a simple function that takes an integer,\n//adds 1, and returns the result.\n\n`
	    +`var plusOne = function(someInteger){\n  return someInteger + 1;\n};`,
	  testCode:
	    `describe('plusOne', function(){\n\tit( //finish this line\n`
	    +`\t\texpect(plusOne(3))/*what goes here?*/(4);\n`
	    +`\t\texpect(plusOne(/*what goes here?*/)).to.equal(-11);\n\t});\n});`,
	  solution:
	    `describe('plusOne', function(){\n`
	    +`\tit(‘should add one to a number’, function(){\n`
	    +`\t\texpect(plusOne(3)).to.equal(4);\n`
	    +`\t\texpect(plusOne(-12)).to.equal(-11);\n\t});\n});`,
	  difficulty: 'Beginner',
	  title: 'Building Basic Test Cases',
	  description: 'Complete a basic it-block and some simple assertions.',
	  authorId: 1 
	}, {
	  startCode:
	    `var arr = [0, 1, 2, 3, 4];\nvar newArr = arr.slice(0, 2);`,
	  testCode:
	    `describe ('lengthOf', function(){\n`
	    +`\tit ('should correctly test the length of the new array', function(){\n`
	    +`\t\texpect(newArr).to.have.lengthOf(2);\n\t});\n`
	    +`\tit('should correctly test the length of the old array', function(){\n`
	    +`\t\t//write the assertion to test the length of 'arr' here\n\t});\n});`,
	  solution:
	    `describe ('lengthOf', function(){\n`
	    +`\tit ('should correctly test the length of the new array', function(){\n`
	    +`\t\texpect(newArr).to.have.lengthOf(2);\n\t});\n`
	    +`\tit('should correctly test the length of the old array', function(){\n`
	    +`\t\texpect(arr).to.have.lengthOf(5);\n\t});\n});`,
	  difficulty: 'Beginner',
	  title: `Intro to 'have' and 'lengthOf'`,
	  description: 'Learn to test the length property of a target.',
	  authorId: 1
	},{
	  startCode: `var arr = [0,1,2,3,4];\nvar newArr = arr.slice(0, 2);`,
	  testCode: 
	    `describe('slice', function(){\n`
	    +`\tit('should return a shallow copy of a portion of an array', function(){\n`
	    +`\t\texpect(newArr).to./*see comment below*/([0,1]);\n\t});\n`
	    +`\tit('should not splice the original array', function(){\n`
	    +`\t\texpect(arr).to.have.lengthOf(5);\n\t});\n});\n\n`
	    +`//try inserting "equal" here and run the test\n`
	    +`//now try "eql" instead, and see the difference`, 
	  solution: 
	    `describe('slice', function(){\n`
	    +`\tit('should return a shallow copy of a portion of an array', function(){\n`
	    +`\t\texpect(newArr).to./*see comment below*/([0,1]);\n\t});\n`
	    +`\tit('should not splice the original array', function(){\n`
	    +`\t\texpect(arr).to.have.lengthOf(5);\n\t});\n});\n\n`
	    +`//"equal" is strict, and behaves like the "===" operator\n`
	    +`//"eql" checks to see if the values are "deep equal"`,
	  difficulty: 'Beginner',
	  title: `'Equal' vs 'eql'`,
	  description: 'Test a common array method to learn the difference between "equal" and "eql".',
	  authorId: 1
	}
];

module.exports = seededChallenges;