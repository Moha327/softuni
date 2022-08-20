function a(b,c,d,e,f){
	let priceofraspberries=(b/2);
  	let priceoforanges=(priceofraspberries-priceofraspberries*.4);
  	let priceofbananas=(priceofraspberries-priceofraspberries*.8);
  	let sumofraspberries=e*(priceofraspberries);
  	let sumoforanges=d*(priceoforanges);
  	let sumofbananas=c*(priceofbananas);
  	let sumofstrawberries=f*(b);
  	let sum=sumofraspberries+sumoforanges+sumofbananas+sumofstrawberries;
  	console.log(sum.toFixed(2));
}