//Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

//Solved with .shift()
function WithShift(arr){
    arr.shift();
    arr.push(0);
    console.log(arr);
}
WithShift([3,1,6,9,4,5]);

//Solved without built in functions
function WithoutShift(arr){
    for(var i = 0; i < arr.length -1; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0
    console.log(arr);
}
WithoutShift([3,1,6,9,4,5]);