//Build a function that accepts an array.  Return a new array with all values except the first, adding 7 to each.  Do not alter the original array.

function AddSevenToMost(arr){
    newArr = [];
    if(arr.length == 0){
        console.log("Array is Empty");
    }
    else{
        for(var i = 1; i < arr.length; i++){
            newArr.push(arr[i] + 7);
        }
        console.log(newArr);
        return(newArr);
    }
}
AddSevenToMost([4,2,7,0]);
AddSevenToMost([]);