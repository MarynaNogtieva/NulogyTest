

var assert = chai.assert;

function checkIfNumber(num){
          if(!isNaN(num) && Number.isFinite(num)){

           return num;
          }
         else{
         	throw new Error("invalid number");
         }
        }

describe('number',function(){
	describe('checkIfNumber',function(){
	it('should return value if it is a valid number',function(){
		var num=123;
		checkIfNumber(num);
		assert.equal(num,num);
	});
	it('should throw an error if input is not a number',function(){
		var num=123;
		
		chai.expect(checkIfNumber).to.throw(Error,"invalid number");
	});
	it('should not accept empty value',function(){
		var num=123;

		chai.expect(num).to.not.be.empty;
	});

});
});