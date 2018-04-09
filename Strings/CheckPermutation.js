//Given two strings, write a method to decide if one is a permutation of the other.

//Solved without built in array methods and with emphasis on minimal memory
function CheckPermutation(str1, str2){
    if(str1.length != str2.length){
        console.log(false)
        return(false);
    }
    var arr2 = str2.split("");
    for(var i = 0; i < str1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(str1[i] != arr2[j] && j == arr2.length - 1){
                console.log(false)
                return(false);
            }
            if(str1[i] == arr2[j]){
                arr2.splice(j, 1);
                j = arr2.length;
            }
        }
    }
    if(arr2.length == 0){
        console.log(true);
        return(true);
    }
    if(arr2.length != 0){
        console.log(false);
        return(false);
    }
}

//Solved with built in methods and with emphasis on speed
function CheckPermutation2(str1, str2){
    if(str1.length != str2.length){
        console.log(false)
        return(false);
    }
    var arr1 = str1.split("");
    var arr2 = str2.split("");
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            console.log(false);
            return(false);
        }
    }
    console.log(true);
    return(true);
}

CheckPermutation("abcdefg", "gbcafed");
CheckPermutation("coding", "dojo");
CheckPermutation("abcdefg", "abcdfgd");
CheckPermutation("abcdefg", "abcdzgd");
CheckPermutation2("abcdefg", "gbcafed");
CheckPermutation2("coding", "dojo");
CheckPermutation2("abcdefg", "abcdfgd");
CheckPermutation2("abcdefg", "abcdzgd");