//Given array and an additional value, insert this value at the beginning of the array.

//Without built in methods
function PushFrontOne(arr, val){
    for(var i = arr.length - 1; i >= 0; i--){
        arr[i + 1] = arr[i]
    }
    arr[0] = val;
    console.log(arr);
}

//With unshift
function PushFrontTwo(arr, val){
    arr.unshift(val);
    console.log(arr);
}
PushFrontOne([6,8,4,2,7], 9);
PushFrontOne([4,3], 0);
PushFrontTwo([6,8,4,2,7], 9);
PushFrontTwo([4,3], 0)