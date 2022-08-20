function arr(st,en){
    let s='';
    for(var i=st;i<=en;i++){
        let ev=0;
        let odd=0;
        let t=''+i
        for(var j=0;j<t.length;j++){
            let b=Number(t.charAt(j))
            if (j%2==0){
                ev+=b
            }
            if (j%2!=0){
                odd+=b
            }
        }
        if(ev===odd){
            s+=`${i} `
        }
    
    }
    console.log(s)
}