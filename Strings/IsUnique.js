//Implement an algorithm to determine if a string has all unique characters. What is you cannot use additonal data structures?

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
IsUnique("abcdefg");
IsUnique("abcdefga");
IsUnique("hi there");
IsUnique("  ");