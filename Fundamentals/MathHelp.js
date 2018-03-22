//You are given two numbers - coefficients M and B in the equation Y=MX + B. Build a function to return the X-intercept. (X-intercept is the value of X where Y equals zero).

function MathHelp(m,b){
    var x = (-b)/m;
    console.log(x);
    return(x)
}
MathHelp(1,2);
MathHelp(5,4);