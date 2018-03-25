//Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Example sigma(3) = 6 (or 1+ 2 + 3).

function sigma(num){
    var sum = 0;
    if(num < 0){
        console.log("Num is negative")
    }
    else{
        for(var i = 0; i <= num; i++){
        sum = sum + i;
        }
    console.log(sum);
    return(sum);
    }
}
sigma(2);
sigma(3);
sigma(10);