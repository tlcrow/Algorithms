//Write a function tha accepts as a parameter a string containing someone's name. Return a string containing the following greeting: strip off the first letter of the name, capitalize this new word, and add " to the first letter!". Given "Dylan", return "Ylan to the D!"

function DGetsJiggy(str){
    var greeting = "";
    var firstLetter;
    for(var i = 0; i < str.length; i++){
        if(i == 0){
            firstLetter = str[i].toUpperCase();
            continue;
        }
        if(i == 1){
            greeting = greeting + str[i].toUpperCase();
            continue;
        }
        greeting = greeting + str[i];
    }
    greeting = greeting + " to the " + firstLetter;
    console.log(greeting);
    return(greeting);
}
DGetsJiggy("Dylan");