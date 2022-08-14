function a(arr){
	let multi=Number(arr[0])*Number(arr[1])*Number(arr[2]);
  	let c=0;
  	let i=3;
  	for (var j =0; j<=arr.length-1;j++){
  	    arr[j]=Number(arr[j]);
  	}
  	while (i<=arr.length-1){
      if (Number(arr[i])===arr[i]){
    	c+=Number(arr[i]);
      }
      	i++;
    }
  	if (Number(multi)<Number(c)){
    	console.log(`No more free space! You need ${Number(c-multi)} Cubic meters more.`);
    }
  	else if (Number(multi)>Number(c)){
      console.log(`${Number(multi-c)} Cubic meters left.`);
  	}
}