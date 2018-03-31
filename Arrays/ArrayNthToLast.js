//Return the element that is N-from-array's-end. Given ([5,2,3,6,4,9,7], 3), return 4. If the array is too short, return null.

function ArrayNLast(arr, val){
    if(arr.length < val){
        console.log(null);
        return(null);
    }
    console.log(arr[arr.length - val]);
    return(arr[arr.length - val]);
}
ArrayNLast([5,2,3,6,4,9,7], 3);