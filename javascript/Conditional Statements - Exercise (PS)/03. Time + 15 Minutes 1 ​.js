function number(a,b){
    var c=b+15;
    var d=a+1;
     var e = c%60; 
    if (a<23 && c<=59){
      console.log(`${a}:${c}`);
  }
    else if (a<23 && c>59) {
    if (e<=9){
      console.log(`${d}:0${e}`);
    }
    else if (e>9){
      console.log(`${d}:${e}`);
    }
  }
    else if (a==23 && c<=59) {
       console.log(`${a}:${c}`);
  }
    else if (a==23 && c>59) {
        if (e<=9){
           console.log(`0:0${e}`);
      }
        else if (e>9){
          console.log(`0:${e}`);
        }
  }
    else if (a==23 && c>59) {
       console.log(`00:${c}`);
  }
}