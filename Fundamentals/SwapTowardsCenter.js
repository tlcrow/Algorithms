//Given an array, swap first and last, third and third-to-last, etc. Input[true, 42, "Ada", 2, "pizza"] becomes ["pizza", 42, "Ada", 2, true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1]

function reverse(arr){
    var temp;
    var i = 0;
    var j = arr.length - 1;
    if(arr.length == 0){
        console.log("Array is empty");
    }
    while(i < j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i = i + 2;
        j = j - 2;
    }
    console.log(arr);
    return(arr);
}
reverse([true, 42, "Ada", 2, "pizza"]);
reverse([1,2,3,4,5,6]);
reverse([1,2,3,4,5,6,7,8,9,10]);
reverse([1]);