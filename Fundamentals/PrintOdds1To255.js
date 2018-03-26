//Print all odd integers from 1 to 255.

function PrintOdds1To255(){
    for(var i = 0; i < 255; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
PrintOdds1To255();