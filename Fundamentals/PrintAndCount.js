//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function PrintAndCount(){
    var count = 0;
    var num = 512;

    while(num <= 4096){
        if(num % 5 == 0){
            console.log(num)
            count++;
            num = num + 4;
        }
        num = num + 1;
    }
    console.log(count);
}
PrintAndCount();

