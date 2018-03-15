//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100.  However, if it is divisible by 400, then it is.

function LeapYear(year){
    if(year % 4 != 0){
        console.log("Not a leap year");
    }
    else if(year % 400 == 0){
        console.log("A leap year");
    }
    else if(year % 100 == 0){
        console.log("Not a leap year");
    }
    else{
        console.log("A leap year");
    }
}
LeapYear(2011);
LeapYear(4000);
LeapYear(1300);
LeapYear(2016);