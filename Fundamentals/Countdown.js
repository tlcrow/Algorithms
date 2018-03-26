//Create a function that accepts a number as an input.  Return a new array that counts down by one, from the number (as array's zero'th element) down to 0 (as the last element). How long is this array?

function Countdown(num){
    var arr = [];
    var count = 0;
    while(num >= 0){
        arr.push(num);
        count = count + 1;
        num = num - 1;
    }
    console.log(arr);
    console.log(count);
}

Countdown(14);