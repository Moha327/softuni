function work(time,day){
	if (day!="Saterday" && day!="Sunday"){
    	if (time>=10 && time<=18){
        	console.log("open");
        }
      	else{
        	console.log("closed");
        }
    }
  	else{
    	console.log("closed");
    }
}