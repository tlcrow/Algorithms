//Write a function that, when given a word array, returns the largest suffix common to all words in the array. For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion". If it is ["nice", "ice", "baby"], return "".

function CommonSuffix(arr){
    var suffix = "";
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = arr[i].length - 1, k = arr[i + 1].length - 1; j >= 0, k >= 0; j--, k--){
            console.log(arr[i][j] + " " + arr[i + 1][k])
            if(arr[i][j] == arr[i + 1][k]){
                suffix = suffix + arr[i][j];
            }
        }
    }
    console.log(suffix);
}
CommonSuffix(["deforestation", "citation", "conviction", "incarceration"]);
// CommonSuffix(["nice", "ice", "baby"]);