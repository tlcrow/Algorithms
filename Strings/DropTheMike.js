//Create a standalone function that accepts an input string, removes leading and trailing white spaces(at beginning and end only), capitalize the first letter of every word, and returns that string. If original string containes the word "Mike" anywhere, immediately return "stunned silence" instead.

function DropTheMike(str){
    var newStr = "";
    var cap = "";
    var end = 0;
    var start = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] != " " || str[i] != " "){
            start = i;
            i = str.length;
        }
        if(i == str.length - 1){
            console.log("");
            return("");
        }
    }
    for(var j = str.length - 1; j >= 0; j--){
        if(str[j] != " " || str[j] != " "){
            end = j;
            j = -1;
        }
    }
    for(var k = start; k <= end; k++){
        if(str[k - 1] == " " && str[k] == "m" && str[k + 1] == "i" && str[k + 2] == "k"  && str[k + 3] == "e"){
            console.log("stunned silence");
            return("stunned silence");
        }
        if(str[k - 1] == " " || str[k - 1] == " " || str[k - 1] == undefined){
            cap = str[k].toUpperCase();
            newStr = newStr + cap;
        }
        else{
            newStr = newStr + str[k];
        }
    }
    console.log(newStr);
    return(newStr);
}
DropTheMike("    hello goodbye  ");
DropTheMike("  what's up mike?    ");
DropTheMike(" how are you doing today?   ");
