//Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!" Every time the array has three evens in a row, print "Even more so!"

function EvensAndOdds(arr){
    var odd = 0;
    var even = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            even = even + 1;
            odd = 0;
            if(even == 3){
                console.log("Even more so!");
                even = 0;
            }
        }
        if(arr[i] % 2 != 0){
            odd = odd + 1;
            even = 0;
            if(odd == 3){
                console.log("That's odd!");
                odd = 0;
            }
        }
    }
}
EvensAndOdds([1,2,3,4,5,6]);
EvensAndOdds([3,4,4,4,4,6]);
EvensAndOdds([1,2,3,3,3,4,5,5,5]);