//Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function CountNonSpaces(string){
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] != " "){
            count = count + 1;
        }
    }
    console.log(count);
    return(count);
}
CountNonSpaces("Honey pie, you are driving me crazy");