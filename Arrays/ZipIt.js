//Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function ZipIt(arr1,arr2){
    var newArr = [];
    var length;
    if(arr1.length > arr2.length){
        length = arr1.length;
    }
    if(arr2.length >= arr1.length){
        length = arr2.length;
    }
    for(var i = 0; i < length; i++){
        if(i < arr1.length){
            newArr[newArr.length] = arr1[i];
        }
        for(var j = i; j <= i; j++){
            if(j < arr2.length){
                newArr[newArr.length] = arr2[j];
            }

        }
    }
    console.log(newArr);
}

//Combine the two arrays' values into the first array, instead of into a new array.

function ZipIt2(arr1, arr2){
    var length = arr1.length;
    var count = arr2.length;
    // var temp =  arr2.length - 1;
    if(arr1.length > arr2.length){
        arr1.length = arr1.length + count;
        for(var i = arr1.length - 1; i > 0; i--){
            if(length > count){
                arr1[i] = arr1[length - 1];
                length = length - 1;
            }
            else{
                arr1[i] = arr2[count - 1];
                count = count - 1;
            }
        }
    }
    if(arr2.length >= arr1.length){
        arr1.length = arr1.length + count;
        for(var i = arr1.length - 1; i > 0; i--){
            if(count >= length){
                arr1[i] = arr2[count - 1];
                count = count - 1;
            }
            else{
                arr1[i] = arr1[length - 1];
                length = length - 1;
            }
        }
    }
console.log(arr1);
}

ZipIt([1,2], [10,20,30,40]);
ZipIt([10,20,30,40], [1,2]);
ZipIt([1,2,3,4], [10,20,30,40]);
ZipIt2([1,2], [10,20,30,40]);
ZipIt2([10,20,30,40], [1,2]);
ZipIt2([1,2,3,4], [10,20,30,40]);