//Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (1 * 2 * 3).

function factorial(num){
    var sum = 1;
    if(num < 0){
        console.log("Num is negative")
    }
    else{
        for(var i = 1; i <= num; i++){
        sum = sum * i;
        }
    console.log(sum);
    return(sum);
    }
}
factorial(2);
factorial(3);
factorial(10);