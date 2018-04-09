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
StrictPalindrome("a x a");
StrictPalindrome("racecar");
StrictPalindrome("Dud");
StrictPalindrome("oho!");