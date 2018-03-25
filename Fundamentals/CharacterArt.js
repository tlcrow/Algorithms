//From StarArt, derive the following that accept and draw the given characters, not just asterisks.

function drawLeftChars(num, char){
    var textfield = "";
    if(num < 0){
        textfield.length = 75;
        console.log(textfield);
    }
    for(var i = 1; i <= num; i++){
        textfield = textfield + char;
    }
    textfield.length = 75;
    console.log(textfield);
}

function drawRightChars(num, char){
    var textfield = "";
    if(num < 0){
        textfield.length = 75;
        console.log(textfield);
    }
    for(var i = 1; i <= 75 - num; i++){
        textfield = textfield + " ";
    }
    for(var i = num; i > 0; i--){
        textfield = textfield + char;
    }
    textfield.length = 75;
    console.log(textfield);
}

function drawCenteredChars(num, char){
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
            textfield = textfield + char;
        }
    }
    if(num % 2 == 1){
        for(var i = 1; i <= half; i++){
           textfield = textfield + " ";
        }
        for(var i = num; i > 0; i--){
            textfield = textfield + char;
        }
    }
    textfield.length = 75;
    console.log(textfield);
}

drawLeftChars(4, "T");
drawRightChars(4, "T");
drawCenteredChars(4, "T");
drawLeftChars(-1, "0");
drawRightChars(-1, "0");
drawCenteredChars(-1, "0");
drawLeftChars(76, "$");
drawRightChars(76, "$");
drawCenteredChars(76, "$");