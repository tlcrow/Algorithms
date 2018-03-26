//Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one digit result.

function sumToOne(num){
    var sum = 0;
    if(num < 0){
        num = Math.abs(num);
    }
    for(var i = 10; i <= num; i = i * 10){
        // var digit = int.Parse(num.toString()[i];
        // var digit : int = int.Parse(number.ToString()[2].ToString());
        // console.log(digit);
        var digit = num % i;
        console.log(digit);
        sum = sum + digit;
        num = num - 
    }
    // console.log(sum);
}
sumToOne(928);