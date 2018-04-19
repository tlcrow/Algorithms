//Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring().

function isSubstring(str1, str2){
    var count = 0;
    if(str2.length > str1.length){
        console.log(false);
        return(false);
    }
    for(var i = 0; i < str1.length - str2.length + 1; i++){
        if(str1[i] == str2[0]){
            for(var j = 0; j < str2.length; j++){
                if(str1[i + count] != str2[j]){
                    break;
                }
                if(str1[i + count] == str2[j]){
                    count = count + 1;
                }
                if(count == str2.length){
                    console.log(true);
                    return(true);
                }
            }
        }
    }
    console.log(false);
    return(false);
}

function StringRotation(str1, str2){
    str1 = str1 + str1;
    isSubstring(str1, str2);
}
StringRotation("waterbottle", "erbottlewat");
StringRotation("abcdefg", "cdbaefg");
StringRotation("waterbottle", "lkgfertmxsd");