//Given an array, print the max, min, and average values for that array.

function MaxMinAverage(arr){
    var max = arr[0];
    var min = arr[0];
    var average;
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    average = sum / arr.length;
    console.log(min);
    console.log(max);
    console.log(average);
}
MaxMinAverage([3,4,7,2,9,5]);
MaxMinAverage([1,1,1,1]);
MaxMinAverage([3,-1,9,-4,10]);