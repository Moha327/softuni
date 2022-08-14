function a(arr){
    let c=0;
    let s=[];
    for ( var i=0;i<arr.length;i+=1){
        if (Number(arr[i])){
    	    c+=Number(arr[i]);
        }
        if (!(Number(arr[i])) &&arr[i]!=='End'){
    	    s.push('Going to ' + arr[i] +'! ');
        }
    }
    for ( var i=0;i<s.length;i+=1){
        console.log(s[i]);
    }
}