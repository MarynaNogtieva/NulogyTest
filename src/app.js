/*
* Without exception, there is a flat markup on all jobs of 5%
* For each person that needs to work on the job, there is a markup of 1.2%

* If pharmaceuticals are involved, there is an immediate 7.5% markup
* For food, there is a 13% markup
* Electronics require a 2% markup
* Everything else, there is no markup


 the markup calculator should accept the initial base price along with the different categories of markups and calculate a final cost for a project.

The flat markup is calculated first and then all other markups are calculated on top of the base price plus flat markup.

Example 1:
----------
    Input:  $1,299.99, 3 people, food
    Output: $1,591.58

Example 2:
----------
    Input:  $5,432.00, 1 person, drugs   5432 * 0.05 =271.6; 271.6+5432=5703.6;  5703.6*0.012=68.4432; 5703.6*0.075=427.77;    5772.0432
    Output: $6,199.81

Example 3:
----------
    Input:  $12,456.95, 4 people, books
    Output: $13,707.63

    */


   //Problem calculate price base on number of people, flat markup, product category
   //Solution:Make a calculate function the will take all necessary inputs
   //Planning:

   //		1)Calculate price on flat Markup, that will make  price after flat markup
   //		2)calculate rate for people - multiply number of people by murkup for each person and multiply it on price after flat markup
   //		3)calculate rate for product based on its category - multiply murkup for each category on  on price after flat markup
   //		4)add results received in step 2 and 3 to the price after flat markup, that we got in step 1;
   //check if result is not a number;
   //check if price or number of people is not a number

   
//initial functioning start
  (function(window){
    'use strict'

     function define_finalMarkUpCalculator(){
     
          var flatMarkUp = 0.05;
          var pplMarkUp = 0.012;

          var Categories={
                food:0.13,
                electronics:0.02,
                drugs:0.075,
                '':0
                }
         //create object
       var finalMarkUpCalculator = {};


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

 
   
      finalMarkUpCalculator.calculatePrice = function calculateFullMarkUp (basicPrice,numberOfPpl,productCategory){
          if(arguments.length==3){


        //check if there are any values are empty
        if(checkIfEmpty(basicPrice) && checkIfEmpty(numberOfPpl) && checkIfEmpty(productCategory)){
              

             try{


                var priceAfterFlatMarkUp =getPriceAfterMarkup(basicPrice,flatMarkUp);
                 var pplMarkUpPrice = getPeopleMurkUp(priceAfterFlatMarkUp,numberOfPpl);
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

      //checl if finalMarkUpCalculator already exists, if not define finalMarkUpCalculator globally
      if(typeof(finalMarkUpCalculator)==='undefined'){
        window.finalMarkUpCalculator = define_finalMarkUpCalculator();
      } else{
        console.log("Library already exists")
      }
     //initial functioning end;
    })(window);