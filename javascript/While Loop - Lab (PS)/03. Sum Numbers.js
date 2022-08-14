function a(arr){
    for(var j=0; j<arr.length;j++){
      arr[j]=Number(arr[j]);
  }
  let i=0;
    let c=0;
    while (i+1<arr.length){
        
      if(c<arr[0]){
          i++;
            c+=arr[i];
      }
      if(c>=arr[0]){
          break;
      }
  }
    console.log(c);
}