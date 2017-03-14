

var assert = chai.assert;

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

describe('number',function(){
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