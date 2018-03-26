//Create a function to generate fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence.


//With array
function fibonacci(num){
    var arr = [0, 1];
    for(var i = 2; i <= num; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr[num]);
}

//Without array
function fibonacciTwo(num){
    var preTwo = 0;
    var pre = 1;
    var now;
    if(num == 0){
        console.log(preTwo);
    }
    else if(num == 1){
        console.log(pre);
    }
    else{
        for(var i = 2; i <= num; i++){
            now = preTwo + pre;
            preTwo = pre;
            pre = now;
        }
        console.log(now);
    }
}
fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(7);
fibonacciTwo(0);
fibonacciTwo(1);
fibonacciTwo(2);
fibonacciTwo(4);
fibonacciTwo(7);