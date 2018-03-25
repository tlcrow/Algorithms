//Change is inevitable. Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins.

function generateCoinChange(cents){
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    while(cents > 0){
        if(cents - 25 > 0){
            quarters = quarters + 1;
            cents = cents - 25;
        }
        else if(cents - 10 > 0){
            dimes = dimes + 1;
            cents = cents - 10;
        }
        else if(cents - 5 > 0){
            nickels = nickels + 1;
            cents = cents - 5;
        }
        else{
            pennies = pennies + 1;
            cents = cents - 1;
        }
    }
    console.log("Change is " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + pennies + " pennies.")
}
generateCoinChange(99);
generateCoinChange(36);