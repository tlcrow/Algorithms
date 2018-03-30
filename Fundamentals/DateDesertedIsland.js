//Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement.

function weekdayName(weekdayNum){
    if(weekdayNum < 8 && weekdayNum > 0){
        switch (weekdayNum) {
            case 1:
                day = "Sunday";
                break;
            case 2:
                day = "Monday";
                break;
            case 3:
                day = "Tuesday";
                break;
            case 4:
                day = "Wednesday";
                break;
            case 5:
                day = "Thursday";
                break;
            case 6:
                day = "Friday";
                break;
            case 7:
                day = "Saturday";
        }
        console.log(day);
    }
}
// weekdayName(3);

//Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1.

function weekdayName2(dayNum){
    if(dayNum <= 365){
        weekdayNum = dayNum % 7;
        switch (weekdayNum) {
            case 1:
                day = "Sunday";
                break;
            case 2:
                day = "Monday";
                break;
            case 3:
                day = "Tuesday";
                break;
            case 4:
                day = "Wednesday";
                break;
            case 5:
                day = "Thursday";
                break;
            case 6:
                day = "Friday";
                break;
            case 0:
                day = "Saturday";
        }
        // console.log(day);
        return(day);
    }
}
// weekdayName2(8);

//Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, add "Enjoy your day off!".

function someDays(){
    var roll;
    var day;
    var status;
    for(var i = 1; i <= 17; i++){
        roll = Math.floor((Math.random()* 365) + 1);
        day = weekdayName2(roll);
        if(day == "Saturday" || day == "Sunday"){
            status = "Enjoy your day off!";
        }
        else{
            status = "Work hard!";
        }
        console.log(day, status);
    }
}
// someDays();

//Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ("May" corresponds to 5). Use an array, without loops.

function monthName(monthNum){
    if(monthNum < 13 && monthNum > 0){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // console.log(months[monthNum - 1]);
        return(months[monthNum - 1]);
    }
}
// monthName(5);

//Now expand monthName() to create monthToDays(monthNum), returning the number of days in that month.

function monthToDays(monthNum){
    if(monthNum < 13 && monthNum > 0){
        var length;
        switch (monthNum) {
            case 1:
            case 3: 
            case 5:
            case 7: 
            case 8:
            case 10:
            case 12:{
                length = 31;
                break;
            }
            case 4:
            case 6:
            case 9:
            case 11:{
                length = 30;
                break;
            }
            case 2:
                length = 28;
                break;
        }
        // console.log(length);
        return(length);
    }
}
// monthToDays(8);

//Build on monthName() to create dayToMonth(dayNum). If given a day number since the year began, return the current month (assume it is not a leap year). Given 75, return "March";

function dayToMonth(dayNum){
    var count = 0;
    if(dayNum > 0 && dayNum < 366){
        for(var i = 1; i <=dayNum; i++){
           count = count + monthToDays(i);
           if(count >= dayNum){
            //    console.log(monthName(i));
               return(monthName(i));
           }
        }
    }
}
// dayToMonth(356);

//Construct fullDate(dayNum) to accept number of days so far, and return a full date string.

function fullDate(dayNum){
    var day = 0;
    var count = 0;
    if(dayNum > 0 && dayNum < 366){
        for(var i = 1; count < dayNum - monthToDays(i); i++){
                count = count + monthToDays(i);
        }
        day = dayNum - count;
        console.log(weekdayName2(dayNum) + ", " + dayToMonth(dayNum) + " " + day);
    }
}
// fullDate(256);

//Build fullDate2(dayNum) to handle days up to 140,000. Make sure to take into account leap years.

function fullDate2(dayNum){
    var year = 2018;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month;
    var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week;
    var day = 0;
    var count = 0;
    var leap = 22;

    if(dayNum > 0 && dayNum <= 140000){
        if(dayNum > 365){                   //To get year
            count = Math.floor(dayNum/365);
            year = year + count;
            console.log(year);
        }

        week = dayNum % 7;                 //To get day of week
        week = weeks[week];

        count = 0;                         //To get month
        for(var i = 0; count < dayNum; i++){ 
            leap = leap + 1;
            if(leap % 48 == 0 && leap != 1008 && leap != 2208 && leap != 3408){       
                count = count + 1;
            }
            count = count + monthToDays(i + 1);
            month = months[i];
            if(i == 11){
                i = -1;
            }
        }

        count = 0;    
        leap = 22;                               //To get day
        for(var i = 0; count < dayNum - monthToDays(i + 1); i++){
            leap = leap + 1;
            if(leap % 48 == 0 && leap != 1008 && leap != 2208 && leap != 3408){
                count = count + monthToDays(i + 1) + 1;
            }
            else{
                count = count + monthToDays(i + 1);
                if(i == 11){
                    i = -1;
                }
            }
        }
        day = dayNum - count;
        if(day == 0){
            day = 29;
        }

        console.log(week + ", " + month + " " + day + ", " + year);
        }
    }
fullDate2(140000);

 