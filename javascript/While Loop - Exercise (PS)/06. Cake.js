function a(arr){
    let c=Number(arr[0])*Number(arr[1]);
    for (var j =0; j<=arr.length-1;j++){
        if (arr[j]!='STOP'){
            arr[j]=Number(arr[j]);
      }
    }
    let i=2;
    while (i<=arr.length-1){
    if ((arr[i])!='STOP'){
      c-=Number(arr[i]);
    }
    else if ((arr[i])=='STOP'){
        break;
    }
        i++;
  }
    if (c<0){
      console.log(`No more cake left! You need ${Math.abs(c)} pieces more.`);
  }
    else if (c>0){
    console.log(`${c} pieces are left.`);
    } 
}