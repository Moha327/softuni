function solve(arr){
    let i=2;
  	let c=Number(arr[1]);
  	let d=0
    while (i<=arr.length-1){
        if (arr[i]=='spend'){
      		c-=Number(arr[i+1]);
      		if(c<=0){
      		    c=0;
      		}
            d++;
        }
      	else if (arr[i]=='save'){
      		c+=Number(arr[i+1]);
          	d++;
        }
      	i++;
    }
  	if (c<arr[0]){
      console.log("You can't save the money.");
      console.log(d);
    }
  	else{
    	console.log(`You saved the money for ${d} days.`);
    }
}