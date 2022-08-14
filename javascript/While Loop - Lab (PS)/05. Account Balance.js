function a(arr){
    let c=0;
    let i=0;
    while (i<=arr.length-1){
        if(arr[i]>=0 && arr[i]!='NoMoreMoney'){
            c+=arr[i];
           console.log(`Increase: ${arr[i].toFixed(2)}`);
           
        }
        else if(arr[i]<0){
            console.log(`Invalid operation!`);
            break;
        }
        i++;
    }
        console.log(`Total: ${c.toFixed(2)}`);
}