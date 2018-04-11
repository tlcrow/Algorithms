//String.slice(start, end) - extract part of a string and return in a new one. Start and end are indives into the string, with the first character at index 0. End param is optional and if present, refers to one beyond the last character to include. Include support for negative indices, representing offsets from string-end. Example: StringSlice(-1) returns the string's last character.

//Without built in function
function StringSlice(arr, start, end){
    var newArr = [];
    if(end == undefined){
        if(start < 0){
            start = arr.length + start;
        }
        newArr[newArr.length] = arr[start];
    }
    if(start < 0 && end < 0){
        start = arr.length + start;
        end = arr.length + end;
        for(var i = arr.length - 1; i > end; i--){
            newArr[newArr.length] = arr[i];
        }
    }
    for(var i = start; i < end; i++){
        newArr[newArr.length] = arr[i];
    }
    console.log(newArr);
    return(newArr);
}

//With slice()
function StringSlice2(arr, start, end){
    if(end == undefined){
        end = start + 1;
    }
    newArr = arr.slice(start, end);
    console.log(newArr);
    return(newArr);
}

StringSlice([0,1,2,3,4,5,6], 1);
StringSlice([0,1,2,3,4,5,6], 1, 3);
StringSlice([0,1,2,3,4,5,6], -1, -3);
StringSlice2([0,1,2,3,4,5,6], 1);
StringSlice2([0,1,2,3,4,5,6], 1, 3);