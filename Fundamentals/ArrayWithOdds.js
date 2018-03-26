//Create an array with all the odd integers between 1 and 255 (inclusive).

//Solved with .push()
function WithPush(){
    var newarr = [];
    for(var i = 0; i < 256; i++){
        if(i % 2 != 0){
            newarr.push(i);
        }
    }
    console.log(newarr);
}
WithPush();

//Solved without built in methods
function WithoutPush(){
    var newarr = [];
    for(var i = 0; i < 256; i++){
        if(i % 2 != 0){
            newarr[newarr.length] = i;
        }
    }
    console.log(newarr);
}
WithoutPush();