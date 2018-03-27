//Let's say a sweatshirt cost $20 (including tax), but there is a 9% discount if you buy two, a 19% discount if you buy three, or 35% discount if you buy four or more. Round up to the nearest dollar. Build function sweatshirtPricing(num) that, gicen a number of sweatshirts, returns cost.

function sweatshirtPricing(num){
    var price;
    if(num <= 0){
        console.log("$0");
        return("$0");
    }
    price = num * 20;
    if(num == 2){
        price = Math.ceil(price * .91);
    }
    if(num == 3){
        price = Math.ceil(price * .81);
    }
    if(num > 3){
        price = Math.ceil(price * .65);
    }
    console.log("$" + price);
    return("$" + price);
}
sweatshirtPricing(1);
sweatshirtPricing(2);
sweatshirtPricing(3);
sweatshirtPricing(6);