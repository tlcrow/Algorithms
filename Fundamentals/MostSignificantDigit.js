//Given a number of any size, return the most signigicant digit.

function MostSignificantDigit(num){
    if(num < 0){
        num = Math.abs(num);
    }
    if(num < 1){
        while(num < 1){
            num = num * 10;
        }
        console.log(Math.trunc(num));
        return(Math.trunc(num));
    }
    while(num > 0){
        if(num < 10){
            console.log(num);
            return(num)
        }
        num = Math.floor(num / 10);
    }
}
MostSignificantDigit(12345);
MostSignificantDigit(67.89);
MostSignificantDigit(0.00987);