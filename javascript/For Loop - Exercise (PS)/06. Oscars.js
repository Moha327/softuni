function a(arr){
    let s=[];
    let t=[];
    let c=arr[1];
    for (var i=3;i<arr.length;i++){
        if (i%2!=0){
            s.push(arr[i]);
            
        }
        else{
            t.push(arr[i]);
        }
    }
    for (var i=0;i<s.length;i++){
       s[i]=(s[i].length*t[i])/2;
       c+=s[i];
    }
    if(c<1250.5){
        console.log(`Sorry, ${arr[0]} you need ${Math.abs(c-1250.5).toFixed(1)} more!`);    
    }
    else{
console.log(`Congratulations, ${arr[0]} got a nominee for leading role with ${(c).toFixed(1)}!`);
    }
    
}