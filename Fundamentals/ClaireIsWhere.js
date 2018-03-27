//Create four functions (reset(), moveBy(), xLocation(), and yLocation()) to track the travels of Claire. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset, yOffset) function moves her by those amounts in those directions. Finally, xLocation() and yLocation() return how far Claire is from home, in x and y directions respectively.

function reset(x,y){
    return[0,0];
}

function moveBy(xOffSet, yOffset, location){
    var x = location[0] + xOffSet;
    var y = location[1] + yOffset;
    return[x, y];
}

function xLocation(location){
    return(location[0]);
}

function yLocation(location){
    return(location[1]);
}

function Claire(){
    var location = reset();
    location = moveBy(1,-2, location);
    location = moveBy(3,1,location);
    console.log(xLocation(location));
    console.log(yLocation(location));
}
Claire();