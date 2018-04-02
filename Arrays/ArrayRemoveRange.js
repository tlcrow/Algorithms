//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70], 2, 4), change to [20,30,70] and return it.

//Without built in methods
function ArrayRemoveRange(arr, start, end){
    var difference = end + 1;
    if(start > arr.length){
        console.log(null);
        return(null);
    }
    if(end > arr.length){
        arr.length = start;
        console.log(arr);
        return(arr);
    }
    for(var i = start; i < arr.length; i++){
        arr[i] = arr[difference];
        difference = difference + 1;
    }
    arr.length = arr.length - 1 - (end - start);
    console.log(arr);
}

//With built in methods
function ArrayRemoveRange2(arr, start, end){
    var index = end - start + 1;
    if(start > arr.length){
        console.log(null);
        return(null);
    }
    if(end > arr.length){
        arr.length = start;
        console.log(arr);
        return(arr);
    }
    arr.splice(start,index);
    console.log(arr);
    return(arr);
}

ArrayRemoveRange([20,30,40,50,60,70], 2, 4);
ArrayRemoveRange([1,2,3,4,5,6,7], 1, 8);
ArrayRemoveRange([1,2,3,4,5,6,7], 8, 9);
ArrayRemoveRange2([20,30,40,50,60,70], 2, 4);
ArrayRemoveRange2([1,2,3,4,5,6,7], 1, 8);
ArrayRemoveRange2([1,2,3,4,5,6,7], 8, 9);