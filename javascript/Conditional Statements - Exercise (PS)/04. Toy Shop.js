function number(price,puzzles,dolls,bears,minions,trucks){
    var total=(Number(puzzles)*2.60+Number(dolls)*3+Number(bears)*4.10+Number(minions)*8.20+Number(trucks)*2);
    var Numberoftoys=(Number(puzzles)+Number(dolls)+Number(bears)+Number(minions)+Number(trucks));
    
    
    var Finalprice=total-total*.25;
    var Rent=Finalprice*.1;
    var Profit=Finalprice-Rent;
    var loose = Profit - price;
    
    var Rent2=total*.1;
    var Profit2=total-total*.1;
    var loose2 = Profit2 - price;
    
    if (Numberoftoys>=50){
        if (Profit<price){
              console.log(`Not enough money! ${-1*Math.round((loose*100))/100} USD needed.`);   
        }
        else if (Profit>price){
              console.log(`Yes! ${(Math.round(loose*100)/100)}0 USD left. `);   
        }
    }
    else if (Numberoftoys<50){
        if (Profit2<price){
              console.log(`Not enough money! ${-1*Math.round((loose2*100))/100} USD needed.`);   
        }
        else{
          console.log(`Yes! ${(Math.round(loose2*100)/100)}0 USD left. `);   
        }
    }
    
  }
  