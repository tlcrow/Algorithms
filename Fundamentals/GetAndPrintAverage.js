//Analyze an array's values and print the average.

function GetAndPrintAverage(arr){
    var sum = 0;
    var average = 0;
    if(arr.length == 0){
        console.log("undefined")
    }
    else{
        for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        average = sum / arr.length;
        console.log(average);
    }   
}
GetAndPrintAverage([1,2,3,4,5,6]);
GetAndPrintAverage([1,1]);