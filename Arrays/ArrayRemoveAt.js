//Given array and an index into array, remove and return the array value at that index.

//Without built in methods
function RemoveAt(arr, index){
    var remove = arr[index];
    if(index < 0){
        console.log("Undefined");
        return("Undefined");
    }
    else if(index > arr.length){
        console.log(arr, "Undefined");
        return(arr, "Undefined");
    }
    else{
        for(var i = index; i < arr.length; i++){
            arr[i] = arr[i + 1]
        }
        arr.length = arr.length - 1;
        console.log(arr);
        console.log(remove);
        return(remove);
    }
}

//With splice
function RemoveAtTwo(arr, index){
    if(index < 0){
        console.log("undefined");
        return("undefined");
    }
    else if(index > arr.length){
        console.log(arr, "Index greater than array length")
        return("undefined");
    }
    else{
        arr.splice(index, 1);
        console.log(arr);
    }
}

RemoveAt([7,4,1,9,0], 2);
RemoveAt([7,4,1,9,0], 0);
RemoveAt([7,4,1,9,0], 7);
RemoveAt([7,4,1,9,0], -1);
RemoveAtTwo([7,4,1,9,0], 2);
RemoveAtTwo([7,4,1,9,0], 0);
RemoveAtTwo([7,4,1,9,0], 7);
RemoveAtTwo([7,4,1,9,0], -1);