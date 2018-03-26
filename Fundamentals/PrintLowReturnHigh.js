//Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function PrintLowReturnHigh(arr){
    var low;
    var high;
    if(arr.length == 0){
        console.log("Array is Empty")
    }
    else{
        if(low == undefined && high == undefined){
            low = arr[0];
            high = arr[0];
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > high){
                high = arr[i];
            }
            if(arr[i] < low){
                low = arr[i];
            }
        }
        console.log(low);
        console.log(high);
        return(high);
    }
}
PrintLowReturnHigh([3,6,2,-1,9,7]);
PrintLowReturnHigh([]);