//Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one digit result.

function sumToOne(num){
    var sum = 0;
    if(num < 0){
        num = Math.abs(num);
    }
    while(num > 0){
        sum = sum + num % 10;
        num = Math.floor(num / 10);
    }
    if(sum > 9){
        sumToOne(sum);
    }
    else{
        console.log(sum);
    }
}
sumToOne(928);
sumToOne(76298);
sumToOne(2);