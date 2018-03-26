//Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

//Optimized for speed
function threesFives(){
    var threes = 0;
    var fives = 0;
    for(var i = 102; i <= 4000000; i++){
        if(i % 3 == 0 && i % 5 == 0){
            i = i + 2;
            continue;
        }
        if(i % 3 == 0){
            threes = threes + i;
            i = i + 2;
        }
    }
    for(var i = 100; i <= 4000000; i++){
        if(i % 3 == 0 && i % 5 ==0){
            i = i + 4;
            continue;
        }
        if(i % 5 == 0){
            fives = fives + i;
            i = i + 4;
        }
    }
    console.log(threes + fives);
}

function betterThreesFives(start, end){
    var threes = 0;
    var fives = 0;
    for(var i = start; i <= end; i++){
        if(i % 3 == 0 && i % 5 == 0){
            i = i + 2;
            continue;
        }
        if(i % 3 == 0){
            threes = threes + i;
            i = i + 2;
        }
    }
    for(var i = start; i <= end; i++){
        if(i % 3 == 0 && i % 5 ==0){
            i = i + 4;
            continue;
        }
        if(i % 5 == 0){
            fives = fives + i;
            i = i + 4;
        }
    }
    console.log(threes + fives);
}
threesFives();
betterThreesFives(1, 100);