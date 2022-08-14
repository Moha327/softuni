function a(arr){
	let username=arr[0];
  	let password=arr[1];
  	let data=arr[2];
  	let i=3;
  	while (password!==data){
    	data=arr[i];
      	i++;
    }
  	console.log(`Welcome ${username}!`);
}