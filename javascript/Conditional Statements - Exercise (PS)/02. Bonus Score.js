function number(a){
    if (a<=100){
      if(a%2==0){
            console.log(6);
          console.log(a+6);
      }
        else if(a%2!=0 && a%5==0){
            console.log(7);
          console.log(a+7);
      }
        else if(a%2!=0 && a%5!=0){
            console.log(5);
          console.log(a+5);
      }
  }
    else if (a>100 && a<=1000) {
      if(a%2==0){
            console.log((a*.2) +1);
          console.log(a+(a*.2) +1);
      }
        else if(a%2!=0 && a%5==0){
            console.log((a*.2) +2);
          console.log(a+(a*.2) +2);
      }
        else if(a%2!=0 && a%5!=0){
            console.log((a*.2));
          console.log(a+(a*.2));
      }
  }
    else if (a>1000) {
      if(a%2==0){
            console.log((a*.1) +1);
          console.log(a+(a*.1) +1);
      }
        else if(a%2!=0 && a%5==0){
            console.log((a*.1) +2);
          console.log(a+(a*.1) +2);
      }
        else if(a%2!=0 && a%5!=0){
            console.log((a*.1));
          console.log(a+(a*.1));
      }
  } 	
}