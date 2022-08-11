function a(budget,season){
	if (budget<=100){
    	if (season=='winter'){
        	console.log(`Somewhere in Bulgaria`);
             console.log(`Hotel - ${ (.7*budget).toFixed(2)}`);
        }
      	else if (season=='summer'){
        	console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${ (.3*budget).toFixed(2)}`);
        }
    }
  	else if (budget>100 && budget<=1000){
    	if (season=='winter'){
        	console.log(`Somewhere in Balkans `);
            console.log(`Hotel - ${ (.8*budget).toFixed(2)}`);
        }
      	else if (season=='summer'){
        	console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${ (.4*budget).toFixed(2)}`);
        }
    }
  	else if (budget>1000){
    	if (season=='winter'){
        	console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${ (.9*budget).toFixed(2)}`);
        }
      	else if (season=='summer'){
        	console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${ (.9*budget).toFixed(2)}`);
        }
    }
}