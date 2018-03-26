//Given array, index, and additional value, insert the value into array at given index.

//Without built in methods
function ArrayInsertAt(arr, index, val){
    if(index < 0){
        console.log("undefined");
    }
    else{
        for(var i = arr.length - 1; i >= index; i--){
            arr[i + 1] = arr[i];
        }
        arr[index] = val;
        console.log(arr);
    }
}

//With splice
function ArrayInsertAtTwo(arr, index, val){
    if(index < 0){
        console.log("undefined");
    }
    else if(index > arr.length){
        console.log("Index greater than array length")
    }
    else{
        arr.splice(index, 0, val);
        console.log(arr);
    }
}


ArrayInsertAt([7,4,1,9,0], 2, 2);
ArrayInsertAt([7,4,1,9,0], 5, 2);
ArrayInsertAt([7,4,1,9,0], 7, 2);
ArrayInsertAt([7,4,1,9,0], -1, 2);
ArrayInsertAtTwo([7,4,1,9,0], 2, 2);
ArrayInsertAtTwo([7,4,1,9,0], 5, 2);
ArrayInsertAtTwo([7,4,1,9,0], 7, 2);
ArrayInsertAtTwo([7,4,1,9,0], -1, 2);
