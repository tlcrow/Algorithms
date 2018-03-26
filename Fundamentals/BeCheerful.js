//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    console.log("good morning!")
}

function again(){
    var num = 1;
    while(num <= 98){
        beCheerful();
    }
}
again();
