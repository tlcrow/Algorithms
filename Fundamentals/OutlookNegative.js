//Given an array, create and return a new one containing all the values of the provided array, made negatice(not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function Negative(arr){
    newArr = [];
    if(arr.length == 0){
        console.log("Array is Empty")
        return("Array is empty")
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(-arr[i]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}
Negative([1,-3,5]);
Negative([4,7,-8,10,-4]);