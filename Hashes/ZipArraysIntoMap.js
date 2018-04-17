//Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, "3": "wassup", "yo": true}.

function zip(arr1, arr2){
    var length;
    var something;
    var map = {};
    if(arr1.length >= arr2.length){
        length = arr1.length;
    }
    if(arr2.length > arr1.length){
        length = arr2.length;
    }
    for(var i = 0; i < length; i++){
        map[arr1[i]] = arr2[i];
    }
    console.log(map);
}
zip([1,2,3,4], ["a", "b", "c", "d"]);
zip([1,2,3,4], ["a", "b", "c"]);
zip([1,2,3], ["a", "b", "c", "d"]);