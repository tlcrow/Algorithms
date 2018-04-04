//Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc".

//Without built in functions
function reverseString(string){
    var temp;
    string = string.split('');
    for(var i = 0, j = string.length - 1; i < j; i++, j--){
        temp = string[i];
        string[i] = string[j];
        string[j] = temp;
    }
    string = string.join('');
    console.log(string);
    return(string);
}

//With built in functions
function reverseString2(string){
    string = string.split('').reverse().join('');
    console.log(string);
    return(string);
}
reverseString("creature");
reverseString("hannah");
reverseString2("creature");
reverseString2("hannah");