//Create a function that, given a string, returns the string's acronym (first letters only, capitalized), Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function Acronyms(string){
    var newStr = '';
    for(var i = 0; i < string.length; i++){
        if(string[i] != " " && i == 0){
            newStr = newStr + string[i];
        }
        else if(string[i] != " " && string[i - 1] == " "){
            newStr =newStr + string[i];
        }
    }
    console.log(newStr.toUpperCase());
    return(newStr.toUpperCase());
}
Acronyms(" there's no free lunch - gotta pay yer way. ");
Acronyms("Live from New York, it's Saturday Night!");
