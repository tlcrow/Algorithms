//Print integers 1 to 100. If divisible by 5, print "Coding" instead. if by 10 also print " Dojo".

function Counting(){
    var num = 1;
    while (num <= 100){
        if(num % 10 == 0){
            console.log("Coding Dojo");
            num = num + 1;
        }
        else if(num % 5 == 0){
            console.log("Coding");
            num = num + 1;
        }
        else{
            console.log(num);
            num = num + 1;
        }
    }
}
Counting();