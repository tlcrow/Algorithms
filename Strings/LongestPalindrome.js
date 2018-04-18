//Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Include spaces as well: given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK.

function LongestPalindrome(str){
    var odd;
    var even;
    var substr = "";
    var comparison = "";
    for(var i = 0, j = 1; j < str.length; i++, j++){
        if(str[i] == str[j + 1] && even != true){
            for(var k = i; k <= j + 1; k++){
                comparison = comparison + str[k];
            }
            if(comparison.length > substr.length){
                substr = comparison;
                comparison = "";
            }
            odd = true;
            i = i - 2;
        }
        if(str[i] == str[j] && odd != true){
            for(var k = i; k <= j; k++){
                comparison = comparison + str[k];
            }
            if(comparison.length > substr.length){
                substr = comparison;
                comparison = "";
            }
            even = true;
            i = i - 2;
        }
    }
    if(substr == ""){
        substr = str[0];
    }
    console.log(substr);
    return(substr);
}

//Re-solve the above problem, but ignore spaces, punctuation, and capitalization

function LongestPalindrome2(str){
    var newStr = "";
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
        if(str[i] == " " ||
           str[i] == "  " ||
           str[i] == "." ||
           str[i] == "?" ||
           str[i] == "!"){
               continue;
           }
        else{
            newStr = newStr + str[i];
        }
    }
    LongestPalindrome(newStr);
}

LongestPalindrome("abba");
LongestPalindrome("what up, daddy-o?");
LongestPalindrome("Yikes! my favorite racecar erupted!");
LongestPalindrome2("Hot puree eruption!")