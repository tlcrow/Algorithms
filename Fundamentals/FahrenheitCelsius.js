//Kelvin wants to convert between temperature scales.  Create FahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, C = (f - 32) x 5/9.

function FahrenheitToCelsius(fDegrees){
    var cDegrees = (fDegrees -32) * 5/9;
    console.log(cDegrees);
    return(cDegrees);
}
FahrenheitToCelsius(67);
FahrenheitToCelsius(32);