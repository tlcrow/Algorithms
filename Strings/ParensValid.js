//Create a function that, given an input string str, returns a boolean whether parentheses is str are valid. Valid sets of parentheses always open before they close. 

function ParensValid(str){
    var first = 0;
    var later = 0;
    for(var i = 0; i < str.length; i++){
        if(later > first){
            console.log(false);
            return(false);
        }
        if(str[i] == "("){
            first = first + 1;
        }
        if(str[i] == ")"){
            later = later + 1;
        }
    }
    if(later != first){
        console.log(false);
        return (false);
    }
    console.log(true);
    return (true);
}
ParensValid("Y(3(p)p(3)r)s");
ParensValid("N(0(p)3");
ParensValid("N(0)t)0(k");
ParensValid("(((((((())))))))")