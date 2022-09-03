function a(f,s){
    f=String(f)
    s=String(s)
    let t='';
    for (var i = Number(f[0]); i <= Number(s[0]); i++){
        for (var j = Number(f[1]); j <= Number(s[1]); j++){
            for (var k = Number(f[2]); k <=Number(s[2]);k++){
                for (var l =Number(f[3]); l <=Number(s[3]);l++){
                    if ((i)%2!=0 && (j)%2!=0 &&(k)%2!=0 && (l)%2!=0) {  
                        t+=(`${i}${j}${k}${l} `);
                    }        
                }
            }
        }
    }
console.log(t);
}