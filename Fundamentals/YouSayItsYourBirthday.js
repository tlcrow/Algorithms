//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day . . .".

function Birthday(x, y, m, d){
    if(x != m && x != d){
        console.log("Just another day ...");
    }
    else if(x == m && y == d){
        console.log("How did you know?")
    }
    else if(x == d && y == m){
        console.log("How did you know?")
    }
    else{
        console.log("Just another day ...")
    }
}

Birthday(6, 6, 6, 2);