//Given a sorted array, remove duplicate values. Because array elements are already in order, all ducplicate values will be grouped together. Do this without using built-in array methods.

function RemoveDuplicates(arr){
    var smallCount = 0;
    var bigCount = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1]){
           smallCount = smallCount + 1;
        }
        else{
            bigCount = bigCount + 1;
            arr[bigCount] = arr[bigCount + smallCount];
            i = bigCount + smallCount - 1;
        }
    }
    arr.length = bigCount;
    console.log(arr);
    
}
RemoveDuplicates([1,2,2,3,4]);
RemoveDuplicates([1,2,2,3,3,3,4,4]);
RemoveDuplicates([1,1,1,2,4,5,5]);