function a(budget,numofnights,priceofnight,percenofaddcost){
    let disc=0;
    let moneyaftertrip=0;
    let budget2=0;
    if (numofnights>7){
        priceofnight=priceofnight-priceofnight*(5/100);
        disc=priceofnight*numofnights;
        budget2=(percenofaddcost/100)*budget;
        moneyaftertrip=disc+budget2;
    }
    else if (numofnights<=7){     
        disc=priceofnight*numofnights;
        budget2=(percenofaddcost/100)*budget;
        moneyaftertrip=budget2+disc;
    } 
    if (budget>=moneyaftertrip){
        console.log(`Smiths will be left with ${Math.abs(budget-moneyaftertrip).toFixed(2)} USD after vacation.`);
    }
    else{
        console.log(`${Math.abs(budget-moneyaftertrip).toFixed(2)} USD needed.`);
    }
}