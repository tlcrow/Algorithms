//Print integers from 0 to 255, and with each integer print the sum so far.

function PrintIntsSum0To255(){
    var sum = 0;
    for(var i = 0; i < 256; i++){
        sum = sum + i;
        console.log(i);
        console.log(sum);
    }
}
PrintIntsSum0To255();