//Add odd integers from -300,000 to 300,000, and console.log the final sum.  Is there a shortcut.

//Long way
function OddIntegers(){
    var sum = 0;
    for(var i = -300000; i <= 300000; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }
    console.log(sum);
}
OddIntegers();

//Shortcut
function Shortcut(){
    var min = -300000;
    var max = 300000;
    var sum = 0
    if(max == Math.abs(min)){
        console.log(0);
    }
    else if(min < 0 && max <0){
        var end = max + min;
        for(var i = 0; i <= end; i++){
            if(i % 2 == 0){
                sum = sum + i;
            }
        }
        console.log(sum);
    }
    else{
        for(var i = min; i <= max; i++){
            if(i % 2 == 0){
                sum = sum + i;
            }
        }
        console.log(sum);
    }
}
Shortcut();