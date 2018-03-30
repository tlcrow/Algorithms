//Given arr and and values min and max, retain only the array values between min and max. Work in-place. No built-in array functions.

function ArrayFilterRange(arr, min, max){
    var count = 0;
    if(min < 0 || max > arr.length - 1){
        return(arr);
    }
    for(var i = min; i <= max; i++){
        arr[count] = arr[i];
        count = count + 1;
    }
    arr.length = max - min + 1;
    console.log(arr);
}
ArrayFilterRange([1,2,3,4,5,6,7], 2, 5);
ArrayFilterRange([1,2,3,4,5,6,7], 0, 5);
ArrayFilterRange([1,2,3,4,5,6,7], 5, 5);