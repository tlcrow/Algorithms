//Create function rollOne() to return a randomly selected integer between 1 and 6(inclusive).
function rollOne(){
    var roll = Math.floor((Math.random() * 6) + 1);
    // console.log(roll);
    return(roll);
}
rollOne();

//Create a function playFives(num), which should call rollOne() multiple times - num times, in fact, where 'num' is input parameter to playFives(num). Each time it should print the value rollOne() returns, and if that return value is 5, also print "That's good luck!".

function playFives(num){
    while(num > 0){
        var roll = rollOne();
        console.log(roll);
        if(roll == 5){
            console.log("That's good luck");
        }
        num = num - 1;
    }
}
playFives(5);

//Create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.

function playStatistics(){
    var lowest;
    var highest;
    var roll;
    for(var i = 0; i < 8; i++){
        roll = rollOne();
        if(i == 0){
            lowest = roll;
            highest = roll;
        }
        if(roll > highest){
            highest = roll;
        }
        if(roll < lowest){
            lowest = roll;
        }
    }
    console.log(highest);
    console.log(lowest);
}
playStatistics();

//Make a copy of playStatistics() and add code to make playStatistics2(), so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

function playStatistics2(){
    var lowest;
    var highest;
    var sum = 0;
    var roll;
    for(var i = 0; i < 8; i++){
        roll = rollOne();
        sum = sum + roll;
        if(i == 0){
            lowest = roll;
            highest = roll;
        }
        if(roll > highest){
            highest = roll;
        }
        if(roll < lowest){
            lowest = roll;
        }
    }
    console.log(highest);
    console.log(lowest);
    console.log(sum);
}
playStatistics2();

//Copy playStatistics2() and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.

function playStatistics3(num){
        var lowest;
        var highest;
        var sum = 0;
        var roll;
        for(var i = 0; i < num; i++){
            roll = rollOne();
            sum = sum + roll;
            if(i == 0){
                lowest = roll;
                highest = roll;
            }
            if(roll > highest){
                highest = roll;
            }
            if(roll < lowest){
                lowest = roll;
            }
        }
        console.log(highest);
        console.log(lowest);
        console.log(sum);
    }
    playStatistics3(6);

//Make a copy of playStatistics3() and change it to create playStatistics4(num), so that at the end instead of the total sum, it prints the average roll.

function playStatistics4(num){
    var lowest;
    var highest;
    var average = 0;
    var roll;
    for(var i = 0; i < num; i++){
        roll = rollOne();
        average = average + roll;
        if(i == 0){
            lowest = roll;
            highest = roll;
        }
        if(roll > highest){
            highest = roll;
        }
        if(roll < lowest){
            lowest = roll;
        }
    }
    average = average / num;
    console.log(highest);
    console.log(lowest);
    console.log(average);
}
playStatistics4(6);