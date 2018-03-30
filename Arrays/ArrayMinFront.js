//Given an array of comparable values, move the lowest element to array's front, shifting backward any elements previously ahead of it.  Do not otherwise change the array's order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.  Do this without using built-in functions.


//Without built in functions
function ArrayMinToFront(arr){
    var minVal = arr[0];
    var minArr = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < minVal){
            minVal = arr[i];
            minArr = i;
        }
    }
    for(var i = minArr; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = minVal;
    console.log(arr);
    return(arr);
}

//With built in functions
function ArrayMinToFront2(arr){
    var minVal = arr[0];
    var minArr = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < minVal){
            minVal = arr[i];
            minArr = i;
        }
    }
    arr.splice(minArr, 1);
    arr.unshift(minVal);
    console.log(arr)
}
ArrayMinToFront([4,2,1,3,5]);
ArrayMinToFront2([4,2,1,3,5]);