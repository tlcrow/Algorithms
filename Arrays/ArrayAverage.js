//Return the average value of an array of unsorted numbers.

function WarmUp(array){
    var average = 0;
    for(var i = 0, j = array.length - 1; i <= j; i++, j--){
        if(typeof array[i] != 'number' || typeof array[i] != 'number'){
            console.log("Not a number")
            return "Not a number"
        }
        if(i == j){
            average = average + array[i]
        }
        else{
            average = average + array[i] + array[j];
        }
    }
    average = average/array.length;
    console.log(average);
    return average;
}
WarmUp([1,5,7,8,3,20]);
WarmUp([3,5,2,5,19,8,17]);