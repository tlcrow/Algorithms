//Create the extractDigit(num, digitNum) function that given a number and a digit numer, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Handle negative digitNum values, where -1 represents tenths digit, etc.

function extractDigit(num, digitNum){
    if(num < 0){
        num = Math.abs(num);
    }
    if(digitNum < 0){
        for(var i = 0; i >= digitNum + 1; i--){
            num = num * 10;
        }
        num = Math.floor(num);
        num = num % 10;
        console.log(num);
        return(num)
    }
    if(digitNum == 0){
        num = Math.floor(num % 10);
        console.log(num);
        return(num);
    }
    else{
        for(var i = 0; i <= digitNum - 1; i++){
            num = Math.floor(num / 10);
        }
        num = num % 10;
        console.log(num);
        return(num);
    }
}
extractDigit(123.45, 2);
extractDigit(123.45, 0);
extractDigit(123.45, -1);
extractDigit(123.45, -2);
extractDigit(123.456789, -4);