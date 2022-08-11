function a(arr){
    let saving=0;
    let sold=0;
    let sum=0;
    let s=[];
    let t=[];
    for (var i=1;i<=arr[0];i++){
        if (i%2==0){
            s.push((i*10)/2);
        }
        else if (i%2!=0){
            t.push((i));
        }
    }
    for (var i=0;i<=s.length-1;i++){
      saving+=s[i]; 
    }
    sold = arr[2]*t.length;
    sum=saving+sold-s.length;
    if (sum-arr[1]<0){
        console.log(`No! ${(Math.abs(sum-arr[1])).toFixed(2)}`);
    }
    else{
        console.log(`Yes! ${(sum-arr[1]).toFixed(2)}`);
    }
}