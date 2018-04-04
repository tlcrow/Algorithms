//Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation.

function IntegerToRomanNumerals(num){
    var newString = "";
    while(num > 0){
        if(num >= 1000){
            newString = newString + "M";
            num = num - 1000;
        }
        else if(num >= 900){
            newString = newString + "CM";
            num = num - 900;
        }
        else if(num >= 500){
            newString = newString + "D";
            num = num - 500;
        }
        else if(num >= 400){
            newString = newString + "CD";
            num = num - 400;
        }
        else if(num >= 100){
            newString = newString + "C";
            num = num - 100;
        }
        else if(num >= 90){
            newString = newString + "XC";
            num = num - 90;
        }
        else if(num >= 50){
            newString = newString + "L";
            num = num - 50;
        }
        else if(num == 49){
            newString = newString + "IL";
            num = num -49;
        }
        else if(num >= 40){
            newString = newString + "XL";
            num = num - 40;
        }
        else if(num >= 10){
            newString = newString + "X";
            num = num - 10;
        }
        else if(num == 9){
            newString = newString + "IX";
            num = num - 9;
        }
        else if(num >= 5){
            newString = newString + "V";
            num = num - 5;
        }
        else if(num == 4){
            newString = newString + "IV"
            num = num - 4;
        }
        else{
            newString = newString + "I"
            num = num - 1;
        }
    }
    console.log(newString);
    return(newString);
}
IntegerToRomanNumerals(4);
IntegerToRomanNumerals(349);
IntegerToRomanNumerals(444);