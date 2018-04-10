//Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" and "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

function StrictPalindrome(str){
    for(var i = 0, j = str.length - 1; i < j; i++, j--){
        if(str[i] != str[j]){
            console.log(false);
            return(false);
        }
    }
    console.log(true);
    return(true);
}

//Do ignore white space (spaces, tabs) and capitalization 
function IsPalindrome(str){
    str = str.toLowerCase();
    for(var i = 0, j = str.length - 1; i <= j; i++, j--){
        if(str[i] == " " ||
           str[i] == "  "){
               j = j + 1;
               continue;
           }
        if(str[j] == " " ||
           str[j] == "  "){
               i = i - 1;
               continue;
           }
        else if(str[i] != str[j]){
            console.log(false);
            return(false);
        }
    }
    console.log(true);
    return(true);
}
StrictPalindrome("a x a");
StrictPalindrome("racecar");
StrictPalindrome("Dud");
StrictPalindrome("oho!");
IsPalindrome("Ra ce car");
IsPalindrome("a x a");
IsPalindrome("TaCo CaT");
IsPalindrome("Tao CaT");