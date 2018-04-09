//Given two strings, write a method to decide if one is a permutation of the other.

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
CheckPermutation("abcdefg", "gbcafed");
CheckPermutation("coding", "dojo");
CheckPermutation("abcdefg", "abcdfgd");
CheckPermutation("abcdefg", "abcdzgd");