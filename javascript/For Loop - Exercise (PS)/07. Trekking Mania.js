function a(arr){
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let e=0;
    let f=0;
    for (var i=1; i<arr.length;i++ ){
        a+=arr[i];
            if (arr[i]<=5){
            b+=arr[i];
        } 
            else if (arr[i]>=6 && arr[i]<=12){
            c+=arr[i];
        }
            else if (arr[i]>=13 && arr[i]<=25){
            d+=arr[i];
        }
        else if (arr[i]>=26 && arr[i]<=40){
            e+=arr[i];
        }
            else if (arr[i]>=41){
            f+=arr[i];
        }
    }
        console.log(`${((b/a)*100).toFixed(2)}%`);
        console.log(`${((c/a)*100).toFixed(2)}%`);
        console.log(`${((d/a)*100).toFixed(2)}%`);
        console.log(`${((e/a)*100).toFixed(2)}%`);
        console.log(`${((f/a)*100).toFixed(2)}%`);
}