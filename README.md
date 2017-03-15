

                       				   Markup Calculator Library v 1.0.1 - Javascript
LIBRARY DESCRIPTION  

This library was created to solve the following problem:

NuPack is responsible for taking existing products and repackaging them for sale at electronic stores like Best Buy. Companies will phone up NuPack, explain the process and NuPack needs to quickly give them an estimate of how much it will cost. Different markups to the job:

* Without exception, there is a flat markup on all jobs of 5%
* For each person that needs to work on the job, there is a markup of 1.2%

Markups are also added depending on the types of materials involved:

* If pharmaceuticals are involved, there is an immediate 7.5% markup
* For food, there is a 13% markup
* Electronics require a 2% markup
* Everything else, there is no markup

Another system calculates the base price depending on how many products need to be repackaged. As such, the markup calculator should accept the initial base price along with the different categories of markups and calculate a final cost for a project.

The flat markup is calculated first and then all other markups are calculated on top of the base price plus flat markup.

Example 1:
----------
    Input:  $1,299.99, 3 people, food
    Output: $1,591.58

Example 2:
----------
    Input:  $5,432.00, 1 person, drugs
    Output: $6,199.81

Example 3:
----------
    Input:  $12,456.95, 4 people, books
    Output: $13,707.63

EXAMPLE OF LIBRARY USAGE

	1)to receive output:
	finalMarkUpCalculator.calculateMarkUpPrice(12495.95,4,"books");

	2) to change flat markup if needed:
        finalMarkUpCalculator.flatMarkUp(6);

	3) to change markup per person:
	 finalMarkUpCalculator.pplMarkUp(2.1);


DEPENDENCIES INSTALATION AND RUNNING TESTS
   
	1)In order to run test code run npm install mocha chai --save-dev.

	With the help of this command you will be able to test code in the browser.
	The reason why there is no ability to test code from the command line yet, is because of the library structure. 
	There are no Module files for now, requiered for Node.js. These Library will be modified to run tests from command line in future.

	2) Once necessary tools are installed, open test/firstUnitTest.js to see the test code.
	3) To run test code in the browser open src/index.html. Make sure that app.js file is included in index.html.
	   Run index.html in one of the modern browsers.

TESTS EXPLANATION 
   
The firstUnitTest.js includes unit tests for the library

It tests functions to check:

1)if a value passed is empty or if the input is a valid number, if not throw and InputError, for example:

describe('Number',function(){
	describe('checkIfNumber',function(){
	it('should return value if it is a valid number',function(){
		var num=123;
		checkIfNumber(num);
		assert.equal(num,num);
	});
	it('should throw an error if input is not a number',function(){
		
		chai.expect(checkIfNumber).to.throw(Error,"invalid number");
	});


});

2) if the number of arguments for finalMarkUpCalculator.calculateMarkUpPrice equals to 3, for example:

describe('Arguments',function(){
	it('should be equal to 3',function(){
			 function calculateArgumentsLength (basicPrice,numberOfPpl,productCategory){
			 	return  arguments.length;
			};

			chai.expect(calculateArgumentsLength(1200.34,4,"food")).to.equal(3);

	});
});

3)if finalMarkUpCalculator is an object or if it has three properties, for example:

describe('finalMarkUpCalculator',function(){
	describe('Object',function(){
	it('should contain 3 properties',function(){
		var propertiesNumber = Object.keys(finalMarkUpCalculator).length;
		chai.expect(propertiesNumber).to.be.equal(3);
	});
	it('should not be an empty object',function(){
       chai.expect(finalMarkUpCalculator).not.to.be.empty;
	});
	});
	describe('Property pplMarkUp',function(){
		it('should throw an error if invalid number is provided',function(){
			//assert.throw(finalMarkUpCalculator.pplMarkUp("aaa"),InputError);
			chai.expect(function(){finalMarkUpCalculator.pplMarkUp("aaa")}).to.throw(Error);
		});
		it('should not change number if value passed is empty',function(){
			var inp1 = "";
			var inp2=null;
			var inp3=[];
			var inp4={};

			chai.expect(function(){finalMarkUpCalculator.pplMarkUp(inp1)}).to.not.equal(inp1);
			chai.expect(function(){finalMarkUpCalculator.pplMarkUp(inp2)}).to.not.equal(inp2);
			chai.expect(function(){finalMarkUpCalculator.pplMarkUp(inp3)}).to.not.equal(inp3);
			chai.expect(function(){finalMarkUpCalculator.pplMarkUp(inp4)}).to.not.equal(inp4);
		});
	});

	describe('Property flatMarkUp',function(){
		it('should throw an error if invalid number is provided',function(){
			//assert.throw(finalMarkUpCalculator.pplMarkUp("aaa"),InputError);
			chai.expect(function(){finalMarkUpCalculator.flatMarkUp("aaa")}).to.throw(Error);
		});
		it('should not change number if value passed is empty',function(){
			var inp1 = "";
			var inp2=null;
			var inp3=[];
			var inp4={};

			chai.expect(function(){finalMarkUpCalculator.flatMarkUp(inp1)}).to.not.equal(inp1);
			chai.expect(function(){finalMarkUpCalculator.flatMarkUp(inp2)}).to.not.equal(inp2);
			chai.expect(function(){finalMarkUpCalculator.flatMarkUp(inp3)}).to.not.equal(inp3);
			chai.expect(function(){finalMarkUpCalculator.flatMarkUp(inp4)}).to.not.equal(inp4);
		});
	});
});
   

 - Once library is included in your code,finalMarkUpCalculator will be created in global scope. Make sure you don't have any other variables with this name in your code.
	1) To calculate the final price use:
		finalMarkUpCalculator.calculateMarkUpPrice(basicPrice,numberOfPpl,productCategory);
			-basicPrice is initial price represented by float or integer
			-numberOfPpl is integer number
			-productOfCategory is a string. 
		As for now there are only three categories that have markup rate - food,electronics and drugs.
		Any other type of category has a markup rate equal to 0;
	2)To change markup rate for number of people use:
		finalMarkUpCalculator.pplMarkUp(num);
		Num is an integer or float that represents a persentage number;
	3) to change flat markup rate use:
		 finalMarkUpCalculator.flatMarkUp(num);
		 Num is an integer or float that represents a persentage number;