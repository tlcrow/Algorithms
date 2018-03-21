//Given arr, add 1 to odd elements([1], [3], etc.), print all values and return arr.

function IncrementSeconds(arr){
    if(arr.lenght == 0){
        console.log("Array is Empty");
    }
    for(var i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            arr[i] = arr[i] + 1;
            console.log(arr[i]);
        }
        else{
            console.log(arr[i]);
        }
    }
    console.log(arr);
    return(arr);
}
IncrementSeconds([4,3,7,9,1,2]);
IncrementSeconds([1]);
IncrementSeconds([1,5]);