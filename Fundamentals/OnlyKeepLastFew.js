//Given array arr and number x, remove all except the last x elements, and return arr (changed and shorter). Given ([2,4,6,8,10], 3), change the given array to [6,8,10] and return it.

//Solved without built in methods
function WithoutShift(arr, num){
    var index = arr.length - num;
    if(arr.length == 0){
        console.log("Array is Empty");
        return("Array is Empty");
    }
    if(arr.length < num){
        console.log("Num is larger than array");
        return("Num is larger than array");
    }
    for(var i = 0; i < num; i++){
        arr[i] = arr[index];
        index = index + 1;
    }
    arr.length = num;
    console.log(arr);
    return(arr);
}
WithoutShift([2,4,6,8,10], 3);
WithoutShift([1], 2);
WithoutShift([3,5,6,1,8,9,10], 5);

// Solved withshift()
function WithShift(arr, num){
    var count = 0;
    if(arr.length == 0){
        console.log("Array is Empty");
        return("Array is Empty");
    }
    if(arr.length < num){
        console.log("Num is larger than array");
        return("Num is larger than array");
    }
    while(count < arr.length - num){
        arr.shift();
    }
    console.log(arr);
    return(arr);
}
WithShift([2,4,6,8,10], 3);
WithShift([1], 2);
WithShift([3,5,6,1,8,9,10], 5);