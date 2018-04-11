//String.concat (str1, str2, ...., strx) - add string(s) to end of existing one. Return new string.


//Without built in functions
function StringConcat(){
    newStr = "";
    for(var i = 0; i < arguments.length; i++){
        newStr = newStr + arguments[i];
    }
    console.log(newStr);
    return(newStr);
}

//With concat
function StringConcat2(){
    var newStr = "";
    for(var i = 0; i < arguments.length; i++){
        newStr = newStr.concat(arguments[i]);
    }
    console.log(newStr);
    return(newStr);
}

StringConcat("foo", "bar", ",", "foo", "bar");
StringConcat("foo", "bar");
StringConcat2("foo", "bar", ",", "foo", "bar");
StringConcat2("foo", "bar");