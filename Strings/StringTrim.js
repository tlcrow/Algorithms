//StringTrim() - remove whitespace (spaces, tabs) from both sides, and return a new string.

//Without built in methods
function StringTrim(str){
    var newStr = "";
    var end = 0;
    var start = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] != " " || str[i] != " "){
            start = i;
            i = str.length;
        }
        if(i == str.length - 1){
            console.log("");
            return("");
        }
    }
    for(var j = str.length - 1; j >= 0; j--){
        if(str[j] != " " || str[j] != " "){
            end = j;
            j = -1;
        }
    }
    for(var k = start; k <= end; k++){
        newStr = newStr + str[k];
    }
    console.log(newStr);
    return(newStr);
}

//With trim()
function StringTrim2(str){
    console.log(str.trim());
}

StringTrim("    hello goodbye   ");
StringTrim("hello goodbye");
StringTrim(" hello goodbye ");
StringTrim("            ");
StringTrim2("    hello goodbye   ");
StringTrim2("hello goodbye");
StringTrim2(" hello goodbye ");
StringTrim2("            ");