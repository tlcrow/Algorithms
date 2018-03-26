//Print muliples of 6 up to 60,000, using a WHILE loop.

function MultiplesOfSix(){
    var num = 0;
    while(num <= 60000){
        if(num % 6 == 0){
            console.log(num);
            num = num + 5;
        }
        num = num + 1;
    }
}
MultiplesOfSix();