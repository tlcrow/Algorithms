//Using FOR loog, print multiples of 3 from -300 to 0.  Skip -3 and -6.

function MultiplesOfThree(){
    var num = -300;
    while(num <= 0){
        if(num == -3 || num == -6){
                num = num + 3;
        }
        else{
            console.log(num);
            num = num + 3;
        }
    }
}
MultiplesOfThree();