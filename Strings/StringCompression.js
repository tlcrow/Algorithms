//Implement a method to perform basic string compressin using the counts of repeated characters. For example, the string aabcccccaaa. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters.

function StringCompression(str){
    newStr = "";
    count = 1;
    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i + 1]){
            break;
        }
        if(i == str.length - 1){
            console.log(str);
            return(str);
        }
    }
    for(var j = 0; j < str.length; j++){
        if(str[j] == str[j + 1]){
            count = count + 1;
        }
        else{
            newStr = newStr + str[j] + count;
            count = 1;
        }
    }
    str = newStr;
    console.log(str);
    return(str);
}
StringCompression("aabcccccaaa");
StringCompression("abca");
StringCompression("abcdeff");
StringCompression("aaaabcdef");