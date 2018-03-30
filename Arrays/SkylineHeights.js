//Let's say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see in order.

function SkylineHeights(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] > arr[i -1]){
            newArr[newArr.length] = arr[i];
        }
    }
    console.log(newArr);
}
SkylineHeights([-1,1,1,7,3]);
SkylineHeights([0,4]);