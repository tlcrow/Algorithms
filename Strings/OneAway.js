//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function OneAway(str1, str2){
    var count = 0;
    if(str1 == str2){
        console.log(true);
        return(true);
    }
    if(str1.length + 1 == str2.length || str1.length == str2.length + 1){
        for(var i = 0, j = 0; i < str1.length, j < str2.length; i++, j++){
            if(str1[i] != str2[j] && str1.length < str2.length){
                count = count + 1;
                i = i - 1;
            }
            if(str1[i] != str2[j] && str1.length > str2.length){
                count = count + 1;
                j = j - 1;
            }
        }
    }
    if(str1.length == str2.length){
        for(var i = 0; i < str1.length; i++){
            if(str1[i] != str2[i]){
                count = count + 1;
            }
        }
    }
    if(count < 2){
        console.log(true);
        return(true);
    }
    console.log(false);
    return(false);
}
// OneAway("pale", "pale");
// OneAway("pale", "ple");
OneAway("palse", "pale");
// OneAway("pale", "bale");
// OneAway("pale", "bake");
