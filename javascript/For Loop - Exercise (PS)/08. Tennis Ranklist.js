function a(arr){
    let c=0;
    let d=0;
    let f=arr[1];
    for (var i=0;i<arr.length;i++){
        if (arr[i]=='W'){
            c+=1;
        }
        if (i>1){
            d+=1;
        }
        if (arr[i]=='F'){
            f+=1200;
        }
        else if (arr[i]=='SF'){
            f+=720;
        }
        else if (arr[i]=='W'){
            f+=2000;
        }
    }
    console.log(`Final points: ${f}`);
    console.log(`Average points: ${Math.floor((f-arr[1])/d)}`);
    console.log(`${((c/d)*100).toFixed(2)}%`);
}