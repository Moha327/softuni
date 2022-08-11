function calculate(screeningType, rows, cols){
	if (screeningType=='Premiere'){
  		console.log((rows*cols*12).toFixed(2));
    }
  	else if (screeningType=='Normal'){
    	console.log((rows*cols*7.5).toFixed(2));
    }
  	else if (screeningType=='Discount'){
    	console.log((rows*cols*5).toFixed(2));
    }	
}