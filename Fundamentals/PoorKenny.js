//Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsnuamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day's outcome.

function whatHappensToday(num){
    var disaster = Math.floor((Math.random() * 100)+1);

    if(0 < disaster && disaster < 11){
        console.log("Volcanos today");
    }
    if(10 < disaster && disaster < 26){
        console.log("Watch out for tsunamis");
    }
    if(25 < disaster && disaster < 46){
        console.log("Earthquakes are possible");
    }
    if(45 < disaster && disaster < 71){
        console.log("Blizzards in the forecast");
    }
    if(70 < disaster && disaster < 101){
        console.log("Be aware of meteors");
    }
}
whatHappensToday();

