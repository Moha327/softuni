function a(num){
	let num2=Number(num);
  	let s='';
  	for (let i=1111;i<=9999;i++){
  		let spl=String(i).split("");
      	let one=Number(spl[0]);
      	let two=Number(spl[1]);
      	let three=Number(spl[2]);
      	let four=Number(spl[3]);
      	if(num2%one==0 && num2%two==0 && num2%three==0 && num2%four==0){
        	s+=i + ' ';
        }
  	}
  	console.log(s);
}