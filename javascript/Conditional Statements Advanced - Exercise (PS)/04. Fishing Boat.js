function solve(budget, season, fisherman){
    let discount = 0;
    let rent = 0;
    switch (season){
                case "Spring":
                    rent = 3000;
                    break;
                case "Summer":
                case "Autumn":
                    rent = 4200;
                    break;
                case "Winter":
                    rent = 2600;
                    break;
    }
    if (fisherman <= 6){
        discount = rent * 0.10;
    }
    else if (fisherman >= 7 && fisherman <= 11){
        discount = rent * 0.15;
    }
    else if (fisherman >= 12){
        discount = rent * 0.25;
    }

    totalSum = rent - discount;

    if (fisherman % 2 == 0 && season != "Autumn"){
                totalSum -= totalSum * 0.05;
    }
    if (budget >= totalSum){
                console.log(`Yes! You have ${Math.abs(budget - totalSum).toFixed(2)} USD left.`);
    }
    else{
        console.log(`Not enough money! You need ${Math.abs(totalSum - budget).toFixed(2)} USD.`);
    }
}