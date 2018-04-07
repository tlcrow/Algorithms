//Given a sequence of parentheses, braces and brackets, determine whether it is valid.

function BracesValid(str){
    var fpar = 0;
    var lpar = 0;
    var fbraces = 0;
    var lbraces = 0;
    var fbrackets = 0;
    var lbrackets = 0;
    var last;
    
    for(var i = 0; i < str.length; i++){
        if(lpar > fpar || lbraces > fbraces || lbrackets > fbrackets){
            console.log(false);
            return(false);
        }
        if(str[i] == "("){
            fpar = fpar + 1;
            last = str[i];
        }
        if(str[i] == ")"){
            if(last == "[" || last == "{"){
                console.log(false);
                return(false);
            }
            lpar = lpar + 1;
            last = undefined;
        }
        if(str[i] == "["){
            fbraces = fbraces + 1;
            last = str[i];
        }
        if(str[i] == "]"){
            if(last == "(" || last == "{"){
                console.log(false);
                return(false);
            }
            lbraces = lbraces + 1;
            last = undefined;
        }
        if(str[i] == "{"){
            fbrackets = fbrackets + 1;
            last = str[i];
        }
        if(str[i] == "}"){
            if(last == "[" || last == "("){
                console.log(false);
                return(false);
            }
            lbrackets = lbrackets + 1;
            last = undefined;
        }
    }
    if(lpar != fpar || lbraces != fbraces || fbrackets != lbrackets){
        console.log(false);
        return (false);
    }
    console.log(true);
    return (true);
}
BracesValid("W(a{t}s[o({ c}o)m]e )h[e{r}e]!");
BracesValid("D(i{a}l[ t]o)n{e");
BracesValid("A(1)s[O (n]0{t) 0}k");
BracesValid("A(1)s[O (n(n)]0{t) 0}k");