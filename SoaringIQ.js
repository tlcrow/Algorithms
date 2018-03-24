//Bogdan, entered with a modest IQ of 101.  Let's say that during a 14-week bootcamp, his IQ rose by .01 on the first day then went up by an additional .02 on the second day, then up by .03 more on the third day, etc... all the way until increasing by .98 on this 98th day (the end of 14 full weeks). what is Bogdan's final IQ?

function SoaringIQ(base){
    var added = .01;
    for(var i = 1; i <=98; i++){
        base = base + added;
        added = added + .01
    }
    console.log(base);
    return(base);
}
SoaringIQ(101)