//Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if value at [0] is less than array's length, print "Too small!"; otherwise print "Just right!".

function FitFirstValue(arr){
    if(arr.length == 0){
        console.log("Your array is empty!");
    }
    if(arr.length < arr[0]){
        console.log("Too big!");
    }
    if(arr.length > arr[0]){
        console.log("Too small!");
    }
    if(arr.length == arr[0]){
        console.log("Just right!");
    }
}
FitFirstValue([9,3,4]);
FitFirstValue([2,5,3,9]);
FitFirstValue([2,6]);
FitFirstValue([]);