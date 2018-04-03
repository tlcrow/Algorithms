//Create a JavaScript function that given a string, returns the integer made from the string's digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924689.

function StringGetDigits(string){
    var num; 
    for(var i = 0; i < string.length; i++){
        if(num == undefined && string[i] == "0"){
            continue;
        }
        else if(num == undefined && string[i] == "1" ||
                num == undefined && string[i] == "2" ||
                num == undefined && string[i] == "3" ||
                num == undefined && string[i] == "4" ||
                num == undefined && string[i] == "5" ||
                num == undefined && string[i] == "6" ||
                num == undefined && string[i] == "7" ||
                num == undefined && string[i] == "8" ||
                num == undefined && string[i] == "9"){
                    num = string[i];
        }
        else if(string[i] == "0" ||
           string[i] == "1" ||
           string[i] == "2" ||
           string[i] == "3" ||
           string[i] == "4" ||
           string[i] == "5" ||
           string[i] == "6" ||
           string[i] == "7" ||
           string[i] == "8" ||
           string[i] == "9"){
            num = num + string[i];
        }
    }
    console.log(num);
    return(num);
}
StringGetDigits("0s1a3y5w7h9a2t4?6!8?0");