function number(a,b,c){
    var d=a+b+c;
    var e =Math.floor(d/60); 
    var f =d%60; 
    if (f<10){
      console.log(`${e}:0${f}`);
  }
    else if (f>=10) {
      console.log(`${e}:${f}`);
  }   
}