//Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function PrintOneReturnAnother(arr){
    if(arr.length == 0){
        console.log("Array is Empty");
    }
    if(arr.length == 1){
        console.log("No second to last value");
    }
    if(arr.length > 1){
        console.log(arr[arr.length - 2]);
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            console.log(arr[i]);
            return arr[i];
        }
        if(i == arr.length - 1 && arr[i] % 2 == 0){
            console.log("There are no odd numbers in array")
        }
        }

}
// PrintOneReturnAnother([4,6,8,3,5,9]);
// PrintOneReturnAnother([2,4,6,8,10]);
PrintOneReturnAnother([2]);