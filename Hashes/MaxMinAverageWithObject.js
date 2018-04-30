//Given an array, return an object containing the array's max, min, and average values.

function MaxMinAverageWithObjects(arr){
    var myAssoc = {max: arr[0], min: arr[0]};
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > myAssoc.max){
            myAssoc.max = arr[i];
        }
        if(arr[i] < myAssoc.min){
            myAssoc.min = arr[i];
        }
        sum = sum + arr[i];
    }
    myAssoc.average = sum / arr.length;
    console.log(myAssoc);
    return(myAssoc);
}
MaxMinAverageWithObjects([1,2,3,4,5]);
MaxMinAverageWithObjects([4, 80, 23, 1]);