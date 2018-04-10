//Given a string, write a function to check if it is a permutation of a palindrome. The palindrome does not need to be limited to just dictionary words.

function PalindromePermutation(str){
    var count = 0;
    str = str.toLowerCase();
    var arr = str.split("");
    if(IsPalindrome(str) == true){
        console.log(false);
        return(false);
    }
    arr = arr.sort();
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == " "){
            continue;
        }
        else if(arr[i] == arr[i + 1]){
            i = i + 1;
        }
        else{
            count = count + 1;
        }
    }
    if(count > 1){
        console.log(false);
        return(false);
    }
    console.log(true);
    return(true);
}

//Function to determine palindrome
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
            return(false);
        }
    }
    return(true);
}

PalindromePermutation("taoc cat");
PalindromePermutation("ab c deffed cba");
PalindromePermutation("taoa cat");