function a(arr){
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let e=0;
    let n=Number(arr[0])
	for (let i=1; i<arr.length;i++){
    	if (arr[i]<200){
    	    a+=1;
    	}
    	else if (arr[i]<400){
    	    b+=1;
    	}
    	else if (arr[i]<600){
    	    c+=1;
    	}
    	else if (arr[i]<800 ){
    	    d+=1;
    	}
    	else if (arr[i]>=800 ){
    	    e+=1;
    	}
    }
    console.log(`${((a/(n))*100).toFixed(2)}%`);
    console.log(`${((b/n)*100).toFixed(2)}%`);
    console.log(`${((c/n)*100).toFixed(2)}%`);
    console.log(`${((d/n)*100).toFixed(2)}%`);
    console.log(`${((e/n)*100).toFixed(2)}%`);
}