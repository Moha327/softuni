function a(arr){
    let sum=arr[1];
    let avg=0;
    let percent=0;
    let win=0;
    for (var i=2;i<arr.length;i++){
        if (arr[i]=='F'){
            sum+=1200;
            avg+=1200;
        }
        else if (arr[i]=='SF'){
            sum+=720;
            avg+=720;
        }
        else if (arr[i]=='W'){
            sum+=2000;
            avg+=2000;
            win+=1;
        }
    }
    console.log(`Final points: ${sum}`);
    console.log(`Average points: ${Math.floor(avg/arr[0])}`);
    console.log(`${((win/(arr.length-2))*100).toFixed(2)}%`)
 }