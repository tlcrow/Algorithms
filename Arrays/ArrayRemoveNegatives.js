//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives' order. Do not use built in methods.

//Without built in methods
function removeNegatives(arr){
    var count;
    for(var i = 0; i < arr.length; i++){
        if(count == undefined && arr[i] < 0){
            count = i;
        }
        if(arr[i] > 0 && count != undefined){
            arr[count] = arr[i];
            count = count + 1;
        }
    }
    arr.length = count;
    console.log(arr);
    return(arr);
}

//With splice()
function removeNegatives2(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    console.log(arr);
    return(arr);
}

removeNegatives([2,2,-1,2,-1,2,-1]);
removeNegatives([-1,2,-3,4]);
removeNegatives([-1,-1,-1,2,3,-3,-3,-3]);
removeNegatives2([2,2,-1,2,-1,2,-1]);
removeNegatives2([-1,2,-3,4]);
removeNegatives2([-1,-1,-1,2,3,-3,-3,-3]);