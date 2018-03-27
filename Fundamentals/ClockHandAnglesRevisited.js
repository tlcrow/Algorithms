//Return to the previous ClockHandAngles solution. Allow fractional values for input seconds, but change your implementation to print only integer values for angles (in degrees) of the various hands.

function clockHandAnglesAgain(seconds){
    var hdegrees;
    var mdegrees;
    var sdegrees;

    var hour = 0;
    hour = Math.floor(seconds/3600);
    seconds = seconds - (3600 * hour);

    var minute = 0;
    minute = Math.floor(seconds/60);
    seconds = seconds - (60 * minute);

    var second = 0;
    second = seconds;

    sdegrees = 6 * second;
    mdegrees = Math.trunc((60 * minute + second) * .1);
    hdegrees = Math.trunc((60 * (hour % 12) + minute) * .5);

    console.log("Hour hand: " + hdegrees + " degs. Minute hand: " + mdegrees + " degs. Second hand: " + sdegrees + " degs.");
}
clockHandAnglesAgain(119730);
clockHandAnglesAgain(457630);