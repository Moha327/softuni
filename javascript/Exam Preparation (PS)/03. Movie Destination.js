function a(Moviebudget,Destination,season,numberofday){
    let priceperday=0;
  	let disc=0;
  	if (Destination=='Sofia'){
      	if (season=='Winter'){
        	priceperday=17000;
          	priceperday=Number(priceperday)*Number(numberofday);
          	disc=Number(priceperday)+Number(priceperday)*.25;
    	}
   		else if (season=='Summer'){
        	priceperday=12500;
          	priceperday=Number(priceperday)*Number(numberofday);
          	disc=Number(priceperday)+Number(priceperday)*.25;
    	}
    }
  	else if (Destination=='Dubai'){
      	if (season=='Winter'){
        	priceperday=45000;
          	priceperday=Number(priceperday)*Number(numberofday);
          	disc=Number(priceperday)-Number(priceperday)*.3;
          	
    	}
   		else if (season=='Summer'){
        	priceperday=40000;
          	priceperday=(priceperday)*Number(numberofday);
          	disc=Number(priceperday)-Number(priceperday)*.3;
    	}
    }
  	else if (Destination=='London'){
      	if (season=='Winter'){
        	priceperday=24000;
          	priceperday=(priceperday)*Number(numberofday);
          	disc=Number(priceperday);
    	}
   		else if (season=='Summer'){
        	priceperday=20250;
          	priceperday=(priceperday)*Number(numberofday);
          	disc=Number(priceperday);
    	}
    }
  	if (Moviebudget<=disc){
    	console.log(`The director needs ${Math.abs(Moviebudget-disc).toFixed(2)} USD more!`)
    }
  	else if (Moviebudget>disc){
    	console.log(`The budget for the movie is enough! We have ${Math.abs(Moviebudget-disc).toFixed(2)} USD left!`)
    }
}