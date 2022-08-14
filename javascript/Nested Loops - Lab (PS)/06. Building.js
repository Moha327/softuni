function a(b,d){
    let c=0;
    let s=[];
    for ( var i=b;i>=1;i--){
       for ( var j=0;j<d;j++){
           if (i==b){
                s.push('L'+String(i)+String(j)+'')
           }
           else{
           		if (i%2==0){
                	s.push('O'+String(i)+String(j)+'')
           		}
           		else if (i%2!=0){
                	s.push('A'+String(i)+String(j)+'')
           		}
           }
        } 
    }
  for ( var j=0;j<s.length;j+=d){
      console.log((s.slice(j,j+d)).join(' '))
  }
}