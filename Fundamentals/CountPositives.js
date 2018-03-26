//Given array of numbers, create function to replace last value with number of positive values. Example, CountPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function CountPositives(arr){
    var count = 0;
    if(arr.length == 0){
        arr[0] = 0;
        console.log(arr);
        return(arr);
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count = count + 1;
        }
    }
    arr[arr.length - 1] = count;
    console.log(arr);
    return(arr);
}
CountPositives([-1,1,1,1]);
CountPositives([3,4,5,6,7]);
CountPositives([-3,-1,8,-7,-4])