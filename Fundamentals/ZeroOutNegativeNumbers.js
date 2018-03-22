//Return the given array, after setting any negative values to zero.

function ZeroOutNegativeNumbers(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr);
}
ZeroOutNegativeNumbers([2,4,6,-1,5,-6]);