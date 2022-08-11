function a(city,commission){
	if (city=='London'){
    	if (commission>=0 && commission<=500){
        	console.log((commission*.05).toFixed(2));
        }
      	else if (commission>500 && commission<=1000){
        	console.log((commission*.07).toFixed(2));
        }
      	else if (commission>1000 && commission<=10000){
        	console.log((commission*.08).toFixed(2));
        }
      	else if (commission>10000){
        	console.log((commission*.12).toFixed(2));
        }
      	else if (commission<0){
        	console.log('error');
        }
    }
  	else if (city=='Rome'){
    	if (commission>=0 && commission<=500){
        	console.log((commission*0.045).toFixed(2));
        }
      	else if (commission>500 && commission<=1000){
        	console.log((commission*0.075).toFixed(2));
        }
      	else if (commission>1000 && commission<=10000){
        	console.log((commission*.1).toFixed(2));
        }
      	else if (commission>10000){
        	console.log((commission*.13).toFixed(2));
        }
      	else if (commission<0){
        	console.log('error');
        }
    }
  	else if (city=='Paris'){
    	if (commission>=0 && commission<=500){
        	console.log((commission*0.055).toFixed(2));
        }
      	else if (commission>500 && commission<=1000){
        	console.log((commission*0.08).toFixed(2));
        }
      	else if (commission>1000 && commission<=10000){
        	console.log((commission*.12).toFixed(2));
        }
      	else if (commission>10000){
        	console.log((commission*.145).toFixed(2));
        }
      	else if (commission<0){
        	console.log('error');
        }
    }
  	else{
    	console.log('error')
    }
}