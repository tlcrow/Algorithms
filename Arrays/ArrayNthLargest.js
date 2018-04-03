//Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.


//This method is meant to not change the original array.  For a more efficient method, sort original array and pull N - 1 index from original array.
function ArrayNthLargest(arr, val){
    var temp;
    var newArr = [];
    newArr.length = val;

    if(val > arr.length){
        console.log(null);
        return(null);
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > newArr[newArr.length - 1] || newArr[newArr.length - 1] == undefined){
            newArr[newArr.length - 1] = arr[i];
            for(var j = newArr.length - 1; j > 0; j--){
                if(newArr[j] > newArr[j - 1] || newArr[j - 1] == undefined){
                    temp = newArr[j - 1];
                    newArr[j - 1] = newArr[j];
                    newArr[j] = temp;
                }
            }
        }
    }
    console.log(newArr[newArr.length - 1]);
    return(newArr[newArr.length - 1]);
}
ArrayNthLargest([1,2,3,4,5,6], 3);
ArrayNthLargest([6,5,4,3,2,1], 6);
ArrayNthLargest([8,4,6,2,1,9,3], 5);
ArrayNthLargest([1,2], 5);