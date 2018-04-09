//Write a method to replace all spaces in a string with '%20'.

function URLify(str){
    newStr = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] == " "){
            newStr = newStr + "%20";
        }
        else{
            newStr = newStr + str[i];
        }
    }
    str = newStr;
    console.log(str);
    return(str);
}

URLify("Mr John Smith");