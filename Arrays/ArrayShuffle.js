//In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array's elements. Let's create shuffle(arr), to efficiently shuffle a given array's values. Work in place naturally.

function shuffle(arr){
    var first;
    var last;
    var temp;
    for(var i = 0; i < arr.length; i++){
        first = Math.floor((Math.random() * arr.length) + 0);
        last = Math.floor((Math.random() * arr.length) + 0);
        temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
    }
    console.log(arr);
    return(arr);
}
shuffle([1,2,3,4,5,6]);