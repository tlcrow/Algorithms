//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working "in-place" means that you can not use a second array - move values within the array that you are given. Do not use built-in methods.

function ArrayReverse(arr){
    var temp;
    for(var i = 0, j = arr.length - 1; i < j; i++, j--){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.log(arr);
}
ArrayReverse([1,2,3,4,5]);
ArrayReverse([1,2,3,4,5,6]);