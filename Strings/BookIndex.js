//Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen. For [1, 13, 14, 15, 37, 38, 70], return string "1, 13-15, 37-38, 70".

function BookIndex(arr){
    var start;
    var end;
    var str = "";
    for(var i = 0; i < arr.length; i++){
        if(start == undefined){
            start = arr[i];
            end = arr[i];
        }
        if(arr[i] + 1 == arr[i + 1]){
            end = arr[i + 1];
        }
        else if(start == end){
            if(i == arr.length - 1){
                str = str + arr[i];
            }
            else{
                str = str + arr[i] + ", ";
                start = undefined;
                end = undefined;
            }
        }
        else if(arr[i] + 1 != arr[i + 1]){
            if(i == arr.length - 1){
                str = str + start + "-" + end;
            }
            else{
                str = str + start + "-" + end + ", ";
                start = undefined;
                end = undefined;
            }
        }
    }
    console.log(str);
    return(str);
}
BookIndex([1, 13, 14, 15, 37, 38, 70]);
BookIndex([1, 2, 13, 14, 15, 37, 38, 70, 71]);