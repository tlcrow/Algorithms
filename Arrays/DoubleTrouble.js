//Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses", 42, false] to [4,4,"Ulysses", "Ulysses", 42, 42, false, false].

function DoubleTrouble(arr){
    var count = arr.length - 1;
    arr.length = arr.length * 2;
    for(var i = arr.length - 1; i > 0; i = i - 2){
        arr[i] = arr[count];
        arr[i - 1] = arr[count];
        count = count - 1;
    }
    console.log(arr);
}
DoubleTrouble([4,"Ulysses", 42, false]);
DoubleTrouble(['a','b','c',1,2,3]);