//Given an array and a value Y, count and print the number of array values greater than Y.

function GreaterThanY(arr, y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count = count + 1;
        }
    }
    console.log(count);
}
GreaterThanY([3,6,8,1,3,6], 5);
GreaterThanY([], 8);