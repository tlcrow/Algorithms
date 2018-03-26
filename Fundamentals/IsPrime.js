//Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1.  Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

function IsPrime(num){
    if(num == 0){
        console.log("Number is 0");
        return("Number is 0");
    }
    if(num == 1){
        console.log("Number is prime");
        return("Number is prime");
    }
    if(num < 0){
        num = Math.abs(num);
    }
    if(num % 2 == 0){
        console.log("Number is not prime");
        return("Number is not prime");
    }
    else{
        for(var i = 3; i < num; i = i + 2){
            if(num % i == 0){
                console.log("Number is not prime");
                return("Number is not prime");
            }
        }
        console.log("Number is prime");
        return("Number is prime");
    }
}
IsPrime(16);
IsPrime(13);
IsPrime(135);
IsPrime(-13);