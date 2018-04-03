//You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums.

function IntermediateSums(arr){
    var count = Math.ceil(arr.length / 11);
    var sum = 0;
    arr.length = arr.length + count;
    count = count - 1;
    var temp =  arr.length - 1;
    for(var i = arr.length - count - 1; i > 0; i--){
        if(i == 1){
            sum = sum + arr[i - 1];
            arr[temp] = sum;
        }
        if(i % 10 == 0){
            count = count - 1;
            arr[temp] = sum;
            temp = i + count;
            sum = 0;
            arr[i + count] = arr[i];
            
        }
        sum = sum + arr[i - 1];
        arr[i + count] = arr[i];
    }
console.log(arr);
}
IntermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]);
IntermediateSums([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);