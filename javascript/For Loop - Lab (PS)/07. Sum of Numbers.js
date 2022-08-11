function a(n){
    n=String(n);
    let s=[];
    let c=0;
    for (var i=0;i<n.length;i++){
        s.push(Number(n[i]));
    }
    for (var i=0;i<s.length;i++){
        c+=s[i];
    }
    console.log(`The sum of the digits is:${c}`);
}