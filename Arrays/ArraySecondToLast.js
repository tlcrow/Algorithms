//Return the second-to-last element of an array. Given [42, true, 4, "Kate", 7] return "Kate". If array is too short, return null.

function ArraySecondLast(arr){
    if(arr.length < 2){
        console.log(null);
        return(null);
    }
    console.log(arr[arr.length - 2]);
    return(arr[arr.length - 2]);
}
ArraySecondLast([42, true, 4, "Kate", 7]);
ArraySecondLast([]);
ArraySecondLast([1,2,3,4,5,6,7,8]);