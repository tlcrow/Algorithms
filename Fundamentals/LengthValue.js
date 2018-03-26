//Given two numbers, return array of length num1 with each value being num2.  Print "Jinx!" if they are the same.

function LengthValue(num1, num2){
    var arr = [];
    if(num1 == num2){
        console.log("Jinx!");
        
    }
    while(num1 > 0){
        arr.push(num2);
        num1 = num1 - 1;
    }
    console.log(arr);
    return(arr);
}
LengthValue(3,3);
LengthValue(4,2);