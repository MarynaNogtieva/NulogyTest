var assert = chai.assert;
console.log(finalMarkUpCalculator);

function checkIfNumber(num){
          if(!isNaN(num) && Number.isFinite(num)){

           return num;
          }
         else{
         	throw new Error("invalid number");
         }
        }


 function checkIfEmpty(val){
 	return ((typeof val !== 'undefined'  || val !== null )) ? true : false;
 		
 }

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
	describe('checkIfEmpty',function(){
		it('should not accept empty value',function(){
		var ppl=7;
		var baseprice=4200.00
		var category = "food";

		chai.expect(checkIfEmpty(ppl)).to.not.be.empty;
		chai.expect(checkIfEmpty(baseprice)).to.not.be.empty;
		chai.expect(checkIfEmpty(category)).to.not.be.empty;
	});
	});

});

describe('Arguments',function(){
	it('should be equal to 3',function(){
			 function calculateArgumentsLength (basicPrice,numberOfPpl,productCategory){
			 	return  arguments.length;
			};

			chai.expect(calculateArgumentsLength(1200.34,4,"food")).to.equal(3);

	});
});

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