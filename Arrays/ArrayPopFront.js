//Given array, remove and return the value at the beginning of the array.

//Without built in methods
function PopFrontOne(arr){
    var front = arr[0];
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    console.log(front);
    return(front);
}

//With shift
function PopFrontTwo(arr){
    var front = arr[0];
    arr.shift();
    console.log(arr);
    console.log(front);
}
PopFrontOne([4,1,7,4,9]);
PopFrontOne([7,2,5,7,9,1]);
PopFrontTwo([4,1,7,4,9]);
PopFrontTwo([7,2,5,7,9,1]);