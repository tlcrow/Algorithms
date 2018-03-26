//Given an array of numbers, replace any negative values with the string 'Dojo'.

function SwapStringForNegativeValues(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
SwapStringForNegativeValues([2,4,6,-1,5,-6]);
