//Return the second-largest element of an array.  Given [42, 1, 4, Math.PI, 7], return 7. If the array is too short, return null.

function ArraySecondLargest(arr){
    var largest = arr[0];
    var second = arr[1];
    for(var i = 0; i < arr.length; i++){
        if(arr.length < 2 || largest == second){
            console.log(null);
            return(null);
        }
        if(arr[i] > largest){
            second = largest;
            largest = arr[i];
        }
        if(arr[i] > second && arr[i] < largest){
            second = arr[i];
        }
    }
    console.log(second);
    return(second);
}
ArraySecondLargest([42, 1, 4, Math.PI, 7]);
ArraySecondLargest([5,6,4,3,2,1]);
ArraySecondLargest([1,2,3,4,5,6]);
ArraySecondLargest([5,5,5,5,5,5,5]);