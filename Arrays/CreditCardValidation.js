//Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula.

function isCreditCardValid(arr){
    var sum = 0;
    for(var i = arr.length - 2; i >= 0; i = i - 2){ //starting from the right, 
        arr[i] = arr[i] * 2;                        //multiple every other number by 2
    }
   for(var i = 0; i < arr.length; i++){
       if(arr[i] > 9){                      //if one of the multiples in greater than 
           arr[i] = arr[i] - 9;             //9, subtract 9
       }
       sum = sum + arr[i];                  //sum all digits
   }
    if(sum % 10 == 0){                      //if sum modulo 10 is 0 return true
        console.log(true);
        return(true);
    }
    if(sum % 10 != 0){                      //if sum modulo 10 is not 0 return false
        console.log(false);
        return(false);
    }
}
isCreditCardValid([5,2,2,8,2]);
isCreditCardValid([7,9,9,2,7,3,9,8,7,1,0]);
isCreditCardValid([7,9,9,2,7,3,9,8,7,1,3]);