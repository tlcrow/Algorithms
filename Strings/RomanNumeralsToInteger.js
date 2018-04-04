//Given a string containing a Roman numeral representation of a positvie integer, return the integer.

function RomanNumeralsToInteger(string){
    var sum = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == "M"){
            console.log("M");
            sum = sum + 1000;
        }
        else if(string[i] == "C" && string[i + 1] == "M"){
            console.log("CM");
            sum = sum + 900;
            i = i + 1;
        }
        else if(string[i] == "D"){
            console.log("D");
            sum = sum + 500;
        }
        else if(string[i] == "C" && string[i + 1] == "D"){
            console.log("CD");
            sum = sum + 400;
            i = i + 1;
        }
        else if(string[i] == "C"){
            console.log("C");
            sum = sum + 100;
        }
        else if(string[i] == "X" && string[i + 1] == "C"){
            console.log("XC");
            sum = sum + 90;
            i = i + 1;
        }
        else if(string[i] == "L"){
            console.log("L");
            sum = sum + 50;
        }
        else if(string[i] == "I" && string[i + 1] == "L"){
            console.log("IL");
            sum = sum + 49;
        }
        else if(string[i] == "X" && string[i + 1] == "L"){
            console.log("XL");
            sum = sum + 40;
            i = i + 1;
        }
        else if(string[i] == "X"){
            console.log("X");
            sum = sum + 10;
        }
        else if(string[i] == "I" && string[i + 1] == "X"){
            console.log("IX");
            sum = sum + 9;
            i = i + 1;
        }
        else if(string[i] == "V"){
            console.log("V");
            sum = sum + 5;
        }
        else if(string[i] == "I" && string[i + 1] == "V"){
            console.log("IV");
            sum = sum + 4;
        }
        else{
            console.log("I");
            sum = sum + 1;
        }
    }
    console.log(sum);
    return(sum);
}
RomanNumeralsToInteger("III");
RomanNumeralsToInteger("DCIX");
RomanNumeralsToInteger("MCDXCII");