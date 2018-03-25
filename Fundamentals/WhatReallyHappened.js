//Kyle (smarter than Kenny) notes that the chance of one isaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen.  In other words, with this new function, all five might occur today - or none. Maybe Kenny will survive.

function whatReallyHappensToday(){
    var volcanos = Math.floor((Math.random() * 100)+1);
    var tsunamis = Math.floor((Math.random() * 100)+1);
    var earthquakes = Math.floor((Math.random() * 100)+1);
    var blizzards = Math.floor((Math.random() * 100)+1);
    var meteors = Math.floor((Math.random() * 100)+1);

    if(0 < volcanos && volcanos < 11){
        console.log("Volcanos today");
    }
    if(0 < tsunamis && tsunamis < 16){
        console.log("Watch out for tsunamis");
    }
    if(0 < earthquakes && earthquakes < 21){
        console.log("Earthquakes are possible");
    }
    if(0 < blizzards && blizzards < 26){
        console.log("Blizzards in the forecast");
    }
    if(0 < meteors && meteors < 31){
        console.log("Be aware of meteors");
    }
    if(volcanos > 10 && tsunamis > 15 && earthquakes > 20 && blizzards > 25 && meteors > 30){
        console.log("Today looks free and clear")
    }
}
whatReallyHappensToday();
