//Create CelsiusToFahrenheit (cDegrees) that accepts number of degrees Celsius, and returns the equaivalent temperature expressed in Fahrenheit degrees. For review, F = c x 9/5 + 32.
//Do Fahrenheit and Celsius values equate at a certain number? Scientific caluclation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

function CelsiusToFahrenheit(cDegrees){
    var fDegrees = cDegrees * 9/5 + 32
    console.log(fDegrees);
    return(fDegrees);
}
CelsiusToFahrenheit(16);
CelsiusToFahrenheit(0);

function Equate(){
    var Degrees = 200;
    var c;
    var f;
    var equate;
    while(equate == undefined){
        f = Degrees * 9/5 + 32;
        c = (Degrees -32) * 5/9;
        if(f == c){
            equate = f;
        }
        else{
            Degrees = Degrees - 1;
        }
    }
    console.log(equate);
    return(equate);
}
Equate();