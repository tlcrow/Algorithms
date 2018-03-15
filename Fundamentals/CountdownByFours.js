//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function CountdownByFours(x){
    var num = x;
    if(x < 0){
        console.log("Undefined");
    }
    else if(x % 2 != 0){
        num = x - 1;
        while(num > 0){
            console.log(num);
            num = num - 4;
        }
    }
    else{
        while(num > 0){
            console.log(num);
            num = num - 4;
        }
    }
}
CountdownByFours(2016);