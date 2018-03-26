//Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute, and second hands.

function clockHandAngles(seconds){
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
    mdegrees = (60 * minute + second) * .1;
    hdegrees = (60 * (hour % 12) + minute) * .5;

    console.log("Hour hand: " + hdegrees + " degs. Minute hand: " + mdegrees + " degs. Second hand: " + sdegrees + " degs.");
}
clockHandAngles(119730);
clockHandAngles(457630);