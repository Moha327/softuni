function a(arr){
    let i=0;
    let s=[];
    while (i<=arr.length-1){
        if ((arr[i])!='Stop'){
          	    s.push(arr[i]);
        }
        i++;
    }
    let b=s[0];
    for (let j=0;j<=s.length-1;j++){
            b=Math.max(b,s[j]);
    }
    console.log(b);
}