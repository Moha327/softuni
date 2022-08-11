function a(n){
    let c=0;
	for (var i = 0; i <=n.length-1;i++){
	    switch(n[i]){
	        case 'a':
    	    c+=1;
	    }
	    switch(n[i]){
    	    case 'e':
    	    c+=2;
	    }
	    switch(n[i]){
    	    case 'i':
    	    c+=3;
	    }
	    switch(n[i]){
    	    case 'o':
    	    c+=(4);
	    }
	    switch(n[i]){
    	    case 'u':
    	    c+=(5);
	    }
    }
    console.log(c);
}