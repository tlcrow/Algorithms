//Given a string array and value (length), remove any strings shorter than length from the array.

function RemoveShorterStrings(arr, val){
    var count = 0;
    var length = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length < val){
            count = count + 1;
        }
        else{
            arr[i - count] = arr[i];
            length = length + 1;
        }
    }
    arr.length = length;
    console.log(arr);
}
RemoveShorterStrings(['cat', 'cattle', 'hat', 'hassle', 'mat', 'mantle'], 4);
RemoveShorterStrings(['cattle', 'cat', 'hassle', 'hat', 'mantle', 'mat'], 4);
RemoveShorterStrings(['cat', 'cattle', 'hat', 'hassle', 'mat', 'mantle', 'pat'], 4);
RemoveShorterStrings(['cattle', 'cat', 'hassle', 'hat', 'mantle','pattle', 'mat'], 4);