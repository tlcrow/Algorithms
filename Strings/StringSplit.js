//String.split(separator, limit) - split string into an array of substrings, returning an array.  Separator specifies where to divide substrings and is not included in any substring. if " " is specified, split the string on every character. Limit is optional and indicates number of splits; additional post-time items should be discarded.

//Without built in functions
function StringSplit(str, separator, limit){
    var Arr = [];
    var substr = "";
    if(limit == undefined){
        end = str.length;
    }
    if(separator == undefined){
        Arr[Arr.length] = str;
        console.log(Arr);
        return(Arr);
    }
    for(var i = 0; i < end; i++){
        if(Arr.length == limit){
            console.log(Arr);
            return(Arr);
        }
        if(separator == ""){
            Arr[Arr.length] = str[i];
        }
        else if(separator != str[i]){
            substr = substr + str[i];
        }
        if(separator == str[i] || i == str.length - 1 && separator != ""){
            Arr[Arr.length] = substr;
            substr = "";
        }
    }
    console.log(Arr);
    return(Arr);
}

//With split()
function StringSplit2(str, separator, limit){
    console.log(str.split(separator, limit));
    return(str.split(separator, limit));

}

StringSplit("How are you?");
StringSplit("How are you?", " ");
StringSplit("How are you?", "");
StringSplit("How are you?", " ", 2);
StringSplit("How are you?", "", 5);
StringSplit2("How are you?");
StringSplit2("How are you?", " ");
StringSplit2("How are you?", "");
StringSplit2("How are you?", " ", 2);
StringSplit2("How are you?", "", 5);
