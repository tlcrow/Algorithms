//Given an array, return the sum of the first value in the array, plus the array's length.  What happens if the array's first value is not a number, but a string or a boolean?

function FirstPlusLength(arr){
    return(arr[0] + arr.length)
}

FirstPlusLength(["right", "left", "top", "down", "center"]);
//It concatinates the string and number
FirstPlusLength([3, 7, 2, 9]);
//It adds the number