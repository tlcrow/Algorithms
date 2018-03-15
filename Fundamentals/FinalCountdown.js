//Given 4 parameters (mult, lowNum, highNum, ex), print the multiples of mult, starting at lowNum and extending to highNum. One exception: if a multiple is equal to ex, then skip (don't print) that one. Do this using a WHILE loop. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, except for the value 9).

function FinalCountdown(mult, lowNum, highNum, ex){
    while(lowNum <= highNum){
        if(lowNum == ex){
            lowNum = lowNum + 1;
        }
        if(lowNum % mult != 0){
            lowNum = lowNum + 1;
        }
        else{
            console.log(lowNum);
            lowNum = lowNum + 1;
        }
    }
}
FinalCountdown(3,5,17,9);