//Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks, sometimes called stars.  You should print the given number of stars consecutively.  Depending on which function is called, those stars should be left-justified, right-justified, or centered (plus/minus one). Write a function that accepts a number and prints that many asterisks. Write a function that prints 75 characters total. Stars should build from the right side. Write function that prints 75 characters total.  the stars should be centered in the 75.

function drawLeftStars(num){
    var textfield = "";
    if(num < 0){
        textfield.length = 75;
        console.log(textfield);
    }
    for(var i = 1; i <= num; i++){
        textfield = textfield + "*";
    }
    textfield.length = 75;
    console.log(textfield);
}

function drawRightStars(num){
    var textfield = "";
    if(num < 0){
        textfield.length = 75;
        console.log(textfield);
    }
    for(var i = 1; i <= 75 - num; i++){
        textfield = textfield + " ";
    }
    for(var i = num; i > 0; i--){
        textfield = textfield + "*";
    }
    textfield.length = 75;
    console.log(textfield);
}

function drawCenteredStars(num){
    var textfield = "";
    var half = Math.floor((75 - num) / 2);
    if(num < 0){
        textfield.length = 75;
        console.log(textfield);
    }
    if(num % 2 == 0){
        for(var i = 1; i <= half + 1; i++){
           textfield = textfield + " ";
        }
        for(var i = num; i > 0; i--){
            textfield = textfield + "*";
        }
    }
    if(num % 2 == 1){
        for(var i = 1; i <= half; i++){
           textfield = textfield + " ";
        }
        for(var i = num; i > 0; i--){
            textfield = textfield + "*";
        }
    }
    textfield.length = 75;
    console.log(textfield);
}

drawLeftStars(4);
drawRightStars(4);
drawCenteredStars(4);
drawLeftStars(-1);
drawRightStars(-1);
drawCenteredStars(-1);
drawLeftStars(76);
drawRightStars(76);
drawCenteredStars(76);