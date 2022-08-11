function a(fruit,day,ammount){
    let price = 0;
   if (day == 'Monday' | day == 'Tuesday' | day == 'Wednesday' | day == 'Thursday' | day == 'Friday'){
           if (fruit == 'banana'){
               price = 2.50;
                 if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
           }
           else if (fruit == 'apple'){
               price = 1.20;
                 if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
             }
           else if (fruit == 'orange'){
               price = 0.85;
                 if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
           }
           else if (fruit == 'grapefruit'){
               price = 1.45;
                 if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
           }
           else if (fruit == 'kiwi'){
               price = 2.70;
                 if (((ammount * price).toFixed(2))!=0){
                     console.log((ammount * price).toFixed(2));
                 }
             else{
                 console.log("");
             }
           }
           else if (fruit == 'pineapple'){
               price = 5.50;
                 if (((ammount * price).toFixed(2))!=0){
                     console.log((ammount * price).toFixed(2));
                 }
             else{
                 console.log('error');
             }
           }
           else if (fruit == 'grapes'){
               price = 3.85;
                 if (((ammount * price).toFixed(2))!=0){
                     console.log((ammount * price).toFixed(2));
                 }
                 else{
                     console.log("");
                 }
           }
           else{
               console.log('error');
           }
   }
   else if (day == 'Saturday' | day == 'Sunday'){
       if (fruit == 'banana'){
           price = 2.7;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else if (fruit == 'apple'){
           price = 1.25;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else if (fruit == 'orange'){
           price = 0.90;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else if (fruit == 'grapefruit'){
           price = 1.60;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else if (fruit == 'kiwi'){
           price = 3.00;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else if (fruit == 'pineapple'){
           price = 5.60;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else if (fruit == 'grapes'){
           price = 4.20;
             if (((ammount * price).toFixed(2))!=0){
                 console.log((ammount * price).toFixed(2));
             }
             else{
                 console.log("");
             }
       }
       else  {
           console.log('');
       }
   }
   else {
       console.log('error');
   }
}