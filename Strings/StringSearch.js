//StringSearch(val)-search string for the given val. Return the index position of the first match found (or -1 if not found).

//Without built in methods
function StringSearch(str, val){
    for(var i = 0; i < str.length; i++){
        if(val == str[i]){
            console.log(i);
            return(i);
        }
    }
    console.log(-1);
    return(-1);
}

//With search()
function StringSearch2(str, val){
    console.log(str.search(val));
    return(str.search(val))
}

StringSearch("abcdefg", "d");
StringSearch(".......!...!", "!");
StringSearch("abcdef", "t");
StringSearch2("abcdefg", "d");
StringSearch2(".......!...!", "!");
StringSearch2("abcdef", "t");