//For [1,3,5,7,9,13], print values that are greater that its 2nd value.  Return how many values this is.


//General solution
function ValuesGreaterSecond(arr){
    var count = 0;
    if(arr.length < 2){
        console.log("Array not long enough")
        return("Array not long enough")
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            count = count + 1;
            console.log(arr[i]);
        }
    }
    console.log(count);
    return(count);
}
ValuesGreaterSecond([1,3,5,7,9,13]);

//Solution specific to array
function ArraySpecific(arr){
    for(var i = 2; i < arr.length; i++){
        console.log(arr[i])
    }
    console.log(arr.length-2);
    return(arr.length-2);
}
ArraySpecific([1,3,5,7,9,13]);