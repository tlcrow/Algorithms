//Given array, write a function that reverses values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverse(arr){
    var temp;
    if(arr.length == 0){
        console.log("Array is empty");
    }
    for(var i = 0, j = arr.length - 1; i < j, j > i; i++, j--){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.log(arr);
    return(arr);
}
reverse([3,1,6,4,2]);
reverse([3]);
reverse([3,2])
