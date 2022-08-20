function arr(n){
    let num=1;
    let a=false
  	let s='';
	for (var i=1;i<=n;i++){
    	for (var j=1;j<=i;j++){
    	    if(num>n){
    	        a=true;
    	        break ;
    	    }
            s+=num+' '
            num+=1        
        }
   
        console.log(s);
        s='';
        if(a){
            break;
        }
    }
}