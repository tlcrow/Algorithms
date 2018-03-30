//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3].

function SwapPairs(arr){
    var temp;
    for(var i = 0; i < arr.length; i = i + 2){
        if(i == arr.length - 1){
            console.log(arr);
            return(arr);
        }
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log(arr);
    return(arr);
}
SwapPairs([1,2,3,4]);
SwapPairs(["Brendan", true, 42]);