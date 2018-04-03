//Create a function that, given a string, returns all of that string's contents. but without blanks.


//Sovled by creating new array
function RemoveBlanks(string){
    var newString = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] != " "){
            newString = newString + string[i];
        }
    }
    console.log(newString);
    return(newString);
}

RemoveBlanks(" Pl   ayTha  tF  u  nkyM usi   c  ");
