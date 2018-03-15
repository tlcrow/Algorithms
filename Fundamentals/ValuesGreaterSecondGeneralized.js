//Write a function that accepts any array, and returns a new array with the array values that are greater than 2nd value.  Print how many values this is. What will you do if the array is only one element long?

function ValuesGreaterSecondGeneralized(arr){
    var array = [];
    if(arr.length < 2){
        console.log("Array less then 2 indexes")
        return("Array less then 2 indexes")
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            array.push(arr[i]);
        }
    }
    console.log(array);
    console.log(array.length);
    return(array);
}
ValuesGreaterSecondGeneralized([1]);
ValuesGreaterSecondGeneralized([10,3,1,6,0,7,8])
