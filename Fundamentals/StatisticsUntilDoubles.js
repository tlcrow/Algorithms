//Implement a '20-sided die' that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

function StatisticsUntilDoubles(){
    var roll = 0;
    var count = 0;
    var min;
    var max;
    var average = 0;
    var pre;
    while(pre != roll){
        pre = roll;
        roll = Math.floor((Math.random() * 20) + 1);
        if(count == 0){
            min = roll;
            max = roll;
        }
        count = count + 1;
        average = average + roll;
        if(roll > max){
            max = roll;
        }
        if(roll < min){
            min = roll;
        }
        if(pre == roll){
            average = average / count;
            console.log(count);
            console.log(min);
            console.log(max);
            console.log(average);
        }
    }
}
StatisticsUntilDoubles();