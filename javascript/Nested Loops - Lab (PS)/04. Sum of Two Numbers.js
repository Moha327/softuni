function a(b,c,n){
    let d=[];
    let s='';
    let t='';
    for ( var i=b;i<=c;i+=1){
    	for (var j=b;j<=c;j+=1){
    	     
             d.push([i,j]);
    	}
    }
    for ( var i=0;i<=d.length-1;i+=1){
        if (d[i][0]+d[i][1]==n){
            s=(`Combination N:${i+1} (${d[i][0]} + ${d[i][1]} = ${n})`);
                break;
        }
    }
    for ( var i=0;i<=d.length-1;i+=1){
        if (d[i][0]+d[i][1]!=n){
            t=(`${d.length} combinations - neither equals ${n}`);
            break;
        }
    }
    if (s.length===0){
    
        console.log(t);
    }
    else if (s.length!==0){
    
        console.log(s);
    }
}