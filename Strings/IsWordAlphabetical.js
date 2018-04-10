//Given a string containing letters and numbers, return whether all contained letters are in alphabetical order.

function IsWordAlphabetical(str){
    var count = 1;
    str = str.toLowerCase();
    for(var i = 1; i < str.length; i++){
        if(str[i] == '0' ||
            str[i] == '1' ||
            str[i] == '2' ||
            str[i] == '3' ||
            str[i] == '4' ||
            str[i] == '5' ||
            str[i] == '6' ||
            str[i] == '7' ||
            str[i] == '8' ||
            str[i] == '9'){
            count = count + 1;
            continue;
        }
        if(str[i - count] >= str[i]){
            console.log(false);
            return(false);
        }
        count = 1;
    }
    console.log(true);
    return(true);
}
IsWordAlphabetical("abcdefg");
IsWordAlphabetical("abcfde");
IsWordAlphabetical("gfedcba");
IsWordAlphabetical("aC78GiK");