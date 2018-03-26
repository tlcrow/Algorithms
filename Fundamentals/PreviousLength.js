//You are passed an array containing strings. Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.

function PreviousLengths(arr){
    var count = arr.length - 1;
    if(arr.length == 0){
        console.log("Empty array");
    }
    else{
        while(count >= 1){
            arr[count] = arr[count - 1].length;
            count = count - 1;
        }
        arr[0] = 0;
        console.log(arr);
    }
}
PreviousLengths(["cat", "mongoose", "horse", "duck"]);
PreviousLengths(["car"]);
PreviousLengths([])