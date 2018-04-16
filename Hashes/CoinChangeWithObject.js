//Given a number of U.S. cents, return the optimal configuration of coins, in an object.

function CoinChangeWithObject(cents){
    var myAssoc = {};
    while(cents > 0){
        if(cents - 25 >= 0){
            if(myAssoc.quarters == undefined){
                myAssoc.quarters = 0;
            }
            myAssoc.quarters = myAssoc.quarters + 1;
            cents = cents - 25;
        }
        else if(cents - 10 >= 0){
            if(myAssoc.dimes == undefined){
                myAssoc.dimes = 0;
            }
            myAssoc.dimes = myAssoc.dimes + 1;
            cents = cents - 10;
        }
        else if(cents - 5 >= 0){
            if(myAssoc.nickels == undefined){
                myAssoc.nickels = 0;
            }
            myAssoc.nickels = myAssoc.nickels + 1;
            cents = cents - 5;
        }
        else{
            if(myAssoc.pennies == undefined){
                myAssoc.pennies = 0;
            }
            myAssoc.pennies = myAssoc.pennies + 1;
            cents = cents - 1;
        }
    }
    console.log(myAssoc);
}
CoinChangeWithObject(99);
CoinChangeWithObject(1);
CoinChangeWithObject(63);
CoinChangeWithObject(5);