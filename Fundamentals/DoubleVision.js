//Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function DoubleVision(arr){
    var newArr = [];
    if(arr.length == 0){
        console.log("Array is empty");
    }
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    console.log(newArr);
    return(newArr);
}
DoubleVision([3,6,2,7,9]);