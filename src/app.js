
  (function(window){
    'use strict'

      function define_finalMarkUpCalculator(){
        //predefined values
          var flatMarkUp = 0.05;
          var pplMarkUp = 0.012;

          var Categories={
                food:0.13,
                electronics:0.02,
                drugs:0.075,
                '':0
                }
         //function to change rates
          function changePplRate(rate){
            if( checkIfEmpty(rate)){
              if(checkIfNumber(rate)==rate){
                     pplMarkUp = rate/100;
              }
            }
          }

          function changeflatMarkUpRate(rate){
             if( checkIfEmpty(rate)){
              if(checkIfNumber(rate)==rate){
                flatMarkUp = rate/100;
              }
            }
          }

       
         function InputError(message){
            this.message = message;
            this.description = (new Error()).stack;
          }
       
         InputError.prototype = Object.create(Error.prototype);
         InputError.prototype.name = "InputError";

        function checkIfNumber(num){
          if(!isNaN(num)&&Number.isFinite(num)){
            return num;
          }
          throw new InputError("Invalid number: " + num);
        }

         function getPriceAfterMarkup(basicPrice,flatMarkUp){
          return checkIfNumber(basicPrice) *(1.00 + flatMarkUp);
         }

         function getPeopleMurkUp(price,numberOfPpl){
          return price*(checkIfNumber(numberOfPpl) * pplMarkUp);
         }

         function getCategoryMarkUp(price,productCategory){
          return price * getProductCategoryRate(productCategory);
         }

         //check if product categories belongs to Categories object, if not, transfer it to ''

         function getProductCategoryRate(productCategory){
          if(!Categories.hasOwnProperty(productCategory)){
          productCategory='';
          }
          return checkIfNumber(Categories[productCategory]);
         }

         function checkIfEmpty(val){
              return ((typeof val !== 'undefined'  || val !== null )) ? true : false;
    
        }

           var finalMarkUpCalculator = {
            calculateMarkUpPrice:calculateFullMarkUp,
            pplMarkUp:changePplRate,
            flatMarkUp:changeflatMarkUpRate

           };

      function calculateFullMarkUp (basicPrice,numberOfPpl,productCategory){
          if(arguments.length==3){


  
        if(checkIfEmpty(basicPrice) && checkIfEmpty(numberOfPpl) && checkIfEmpty(productCategory)){
              

             try{


                var priceAfterFlatMarkUp =getPriceAfterMarkup(basicPrice,flatMarkUp);
                 var pplMarkUpPrice = getPeopleMurkUp(priceAfterFlatMarkUp,parseInt(numberOfPpl,10));
                 var categoryMarkUpPrice = getCategoryMarkUp(priceAfterFlatMarkUp,productCategory);

                 var result =priceAfterFlatMarkUp + pplMarkUpPrice + categoryMarkUpPrice;

                 return Math.round(result * 100)/100;

              }
             catch(err){ 
                if (err instanceof InputError){
                   (console.log(err.message + "\n" + err.description))
                } else{
                  throw err;
                }
           } 
             
        }
        else{
          return "Error: Some value was not provided or it has a wrong format.";
        }

        }else{
          return "Error: there must be 3 arguments."  
          }
       }

        return finalMarkUpCalculator;
      }


      if(typeof(finalMarkUpCalculator)==='undefined'){
        window.finalMarkUpCalculator = define_finalMarkUpCalculator();
      } else{
        return "Library finalMarkUpCalculator already exists.";
      }

    })(window);