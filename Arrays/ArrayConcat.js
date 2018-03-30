//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays.

function ArrayConcat(arr1, arr2){
    var newArr = [];
    var count = 0;
    for(var i = 0; i < arr1.length; i++){
        newArr[count] = arr1[i];                       //newArr.push(arr1[i]);
        count = count + 1;
    }
    for(var i = 0; i < arr2.length; i++){
        newArr[count] = arr2[i];                       //newArr.push(arr2[i]);
        count = count + 1;
    }
    console.log(arr1);
    console.log(arr2);
    console.log(newArr);
    return(newArr);
}
ArrayConcat(['a', 'b'], [1,2]);