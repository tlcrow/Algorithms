//Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value: if current count is evenly divisible by 3, don't add to sum; if current count is evenly divisible by 7, include it twice in sum, if current count is exactly 1/3 of num, return -1 immediately.

function messyMath(num){
    var sum = 0;
    for(var i = 0; i <= num; i++){
        if((num / 3) == i){
            console.log(-1);
            return(-1);
        }
        else if(i % 3 == 0){
            // count = count + 1;
            continue;
        }
        else if(i % 7 == 0){
            // count = count + 1;
            sum = sum + i + i;
        }
        else{
            sum = sum + i;
        }
    }
    console.log(sum);
}
messyMath(4);
messyMath(8);
messyMath(15);