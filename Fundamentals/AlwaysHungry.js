//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.

function AlwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count = count + 1;
        }
    }
    if(count == 0){
        console.log("I'm hungry");
    }
}
AlwaysHungry(["food", "food", 3, "food"]);
AlwaysHungry([]);
AlwaysHungry([3,6,2,9]);