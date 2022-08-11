function calculate(flowersType,flowersCount,budget){
    let cost=0;
    flowersCount=Number(flowersCount);
   budget=Number(budget);
  if (flowersType=="Roses"){
      if (flowersCount<=80){
          cost=flowersCount*5;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
            
      }
        else if (flowersCount>80){
          cost=flowersCount*5;
            cost-=cost*.1;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
  }
    else if (flowersType=="Dahlias"){
      if (flowersCount<=90){
          cost=flowersCount*3.8;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
        else if (flowersCount>90){
          cost=flowersCount*3.8;
            cost-=cost*.15;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
  }
    else if (flowersType=="Tulips"){
      if (flowersCount<=80){
          cost=flowersCount*2.8;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
        else if (flowersCount>80){
          cost=flowersCount*2.8;
            cost-=cost*.15;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
  }
    else if (flowersType=="Narcissus"){
      
      if (flowersCount>=120){
          cost=flowersCount*3;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
      else if (flowersCount<120){
          cost=flowersCount*3;
            cost+=cost*.15;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
    
  }
    else if (flowersType=="Gladiolus"){
      
      if (flowersCount>=80){
          cost=flowersCount*2.5;
           if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
        else if (flowersCount<80){
          cost=flowersCount*2.5;	
            cost+=cost*.2;
            if (cost>budget){
              console.log(`Not enough money, you need ${Math.abs(budget-cost).toFixed(2)} USD more.`);
          }
            else if (cost<=budget){
              console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget-cost).toFixed(2)} USD left.`);
          }
      }
  }
}