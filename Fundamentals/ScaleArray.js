//Given array arr and number num, multiply each arr value by num, and return the changed arr.

function ScaleArray(arr, num){
    if(arr.length == 0){
        console.log("Array is Empty")
    }
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    console.log(arr);
    return(arr);
}
ScaleArray([4,2,6,4], 3);
ScaleArray([8,3,5,1,6], 0);