function a(n){
    let c=0;
    let s=[];
  for (var i=0;i<=n;i++){
      for (var j=0;j<=n;j++){
          for (var k=0;k<=n;k++){
                  if(i+j+k ==n){
                      c+=1;
                      s.push([i,j,k]);
                  }
          }
      }
  }
    console.log(c);
}