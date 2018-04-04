//Build a standalone function to remove strings of even lengths from a given array. For array containing ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."], change that same array to ["Nope!", "Its", "Chris", "."]

function RemoveEvenLengthStrings(arr){
    var count = 0;
    var length = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length % 2 != 1){
            count = count + 1;
        }
        else{
            arr[i - count] = arr[i];
            length = length + 1;
        }
    }
    arr.length = length;
    console.log(arr);
}
RemoveEvenLengthStrings(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."]);
RemoveEvenLengthStrings(["Can", "I", "get", "some", "help", "here"]);