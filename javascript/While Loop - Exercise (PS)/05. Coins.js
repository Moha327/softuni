function solve(n){
    let i=0;
  	let c=0;
  	n=n*100;
    while (i<=s.length-1){
        if(n>=200){
            n-=200;
            c+=1;
        }
        else if(n>=100){
            n-=100;
            c+=1;
        }
        else if(n>=50){
            n-=50;
            c+=1;
        }
        else if(n>=20){
            n-=20;
            c+=1;
        }
        else if(n>=10){
            n-=10;
            c+=1;
        }
        else if(n>=5){
            n-=5;
            c+=1;
        }
         else if(n>=2){
            n-=2;
            c+=1;
        }
         else if(n>=1){
            n-=1;
            c+=1;
        }
        i++;
    }
    console.log(c);
}