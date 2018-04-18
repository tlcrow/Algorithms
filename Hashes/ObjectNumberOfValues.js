//Without using the .length property that is present on all arrays, determine and return the number of values in the given array.

function ObjectNumberOfValues(assocArr){
    var count = 0;
    for(key in assocArr){
        if(assocArr[key] != undefined){
            count = count + 1;
        }
    }
    console.log(count);
    return(count);
}
ObjectNumberOfValues({"name": "Zaphod", "charm": "high", "morals": "dicey"});
ObjectNumberOfValues({"1": "a", "2": undefined, "3": "c", "4": "d"});