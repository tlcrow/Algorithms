//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right (or to the left for negative shiftBy) by that amount. "Wrap-around" any values that shift off array's end to the other side, so that no datais lost. Operate in-place: given ([1,2,3], 1), change the array to [3,1,2]. Don't use built in functions.


//Without built in methods
function rotateArr(arr, shiftBy){
    var temp;
    if(shiftBy == 0 || Math.abs(shiftBy) == arr.length){
        console.log(arr);
        return(arr);
    }
    if(shiftBy < 0){
        shiftBy = Math.abs(shiftBy);
        for(var i = 0; i < shiftBy; i++){
            temp = arr[i];
            for(var j = 0; j < arr.length; j++){
                arr[j] = arr[j + 1];
            }
            arr[arr.length - 1] = temp;
            shiftBy = shiftBy - 1;
            i = -1;
        }
        console.log(arr);
        return(arr);
    }
    if(shiftBy > 0){
        shiftBy = arr.length - shiftBy - 1;
        for(var i = arr.length - 1; i > shiftBy; i--){
            temp = arr[i];
            for(var j = arr.length - 1; j >=0; j--){
                arr[j] = arr[j - 1];
            }
            arr[0] = temp;
            shiftBy = shiftBy + 1;
            i = arr.length;
        }
        console.log(arr);
        return(arr);
    }
}

//With built in methods
function rotateArr2(arr, shiftBy){
    if(shiftBy == 0 || Math.abs(shiftBy) == arr.length){
        console.log(arr);
        return(arr);
    }
    if(shiftBy > 0){
        for (var i = 0; i < shiftBy; i++) {
            arr.unshift(arr.pop());
        }
    }
    if(shiftBy < 0){
        for(var i = shiftBy; i < 0; i++){
            arr.push(arr.shift());
        }
    }
    console.log(arr);
}
rotateArr([1,2,3,4,5], 1);
rotateArr([1,2,3,4,5], -2);
rotateArr([1,2,3,4,5], 3);
rotateArr([1,2,3,4,5], -4);
rotateArr([1,2,3,4,5], 6);
rotateArr2([1,2,3,4,5], 1);
rotateArr2([1,2,3,4,5], -2);
rotateArr2([1,2,3,4,5], 3);
rotateArr2([1,2,3,4,5], -4);
rotateArr2([1,2,3,4,5], 6);