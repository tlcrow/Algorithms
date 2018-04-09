//Implement an algorithm to determine if a string has all unique characters. What is you cannot use additonal data structures?

//Solved without built in methods and an emphasis on minimal memory
function IsUnique(str){
    for(var i = 0; i < str.length; i++){
        for(var j = i + 1; j < str.length; j++){
            if(str[i] == str[j]){
                console.log(false);
                return(false);
            }
        }
    }
    console.log(true);
    return(true);
}

//Solved with built in methods and an emphasis on speed
function IsUnique2(str){
    var arr = str.split("");
    arr = arr.sort();
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1]){
            console.log(false);
            return(false);
        }
    }
    console.log(true);
    return(true);
}

IsUnique("abcdefg");
IsUnique("abcdefga");
IsUnique("hi there");
IsUnique("  ");
IsUnique2("abcdefg");
IsUnique2("abcdefga");
IsUnique2("hi there");
IsUnique2("  ");