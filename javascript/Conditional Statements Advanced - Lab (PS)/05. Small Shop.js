function a(product,city,price){
	if (product=='coffee'){
    	if (city=='London'){
        	console.log(price*0.50);
        }
      	else if (city=='Rome'){
        	console.log(price*0.40);
        }
      	else if (city=='Paris'){
        	console.log(price*0.45);
        }
    }
  	else if (product=='water'){
    	if (city=='London'){
        	console.log(price* 0.80);
        }
      	else if (city=='Rome'){
        	console.log(price*0.70);
        }
      	else if (city=='Paris'){
        	console.log(price*0.70);
        }
    }
  	else if (product=='beer'){
    	if (city=='London'){
        	console.log(price*1.20);
        }
      	else if (city=='Rome'){
        	console.log(price*1.15);
        }
      	else if (city=='Paris'){
        	console.log(price*1.10);
        }
    }
  	else if (product=='sweets'){
    	if (city=='London'){
        	console.log(price*1.45);
        }
      	else if (city=='Rome'){
        	console.log(price*1.30);
        }
      	else if (city=='Paris'){
        	console.log(price*1.35);
        }
    }
  	else if (product=='peanuts'){
  		if (city=='London'){
        	console.log(price*1.60);
        }
      	else if (city=='Rome'){
        	console.log(price*1.50);
        }
      	else if (city=='Paris'){
        	console.log(price*1.55);
        }
    }
}