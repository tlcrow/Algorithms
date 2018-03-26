//Given an array, find and print its largest element.

function FindPrintMax(arr){
    var max = arr[0];
    if(arr.length == 0){
        console.log("Array is Empty");
    }
    else{
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        console.log(max);
    }
}
FindPrintMax([5,2,1,8,7,10,3,6]);
FindPrintMax([]);
FindPrintMax(['letter', 'max', 'zero', 'boy', 'girl', 'mongoose'])