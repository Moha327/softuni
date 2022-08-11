function movie(budget,countWalkons,priceClothes) {
    let priceDecor = budget * 0.10;
    let totalPriceClothes = countWalkons * priceClothes;
    if (countWalkons > 150) {
        totalPriceClothes = totalPriceClothes - totalPriceClothes * 0.10; 
    }
    let neededMoney = priceDecor + totalPriceClothes;
    let result = Math.abs(neededMoney - budget);

    if (neededMoney > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${result.toFixed(2)} USD more.`);
    } else  {
        console.log("Action!");
        console.log(`Wingard starts filming with ${result.toFixed(2)} USD left.`)
    }
}