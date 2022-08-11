function a(arr){
    for (var i=2;i<arr.length;i++){
        if (arr[i]==='Facebook'){
            arr[1]-=150;
        }
        else if (arr[i]==='Instagram'){
            arr[1]-=100;
        }
        else if (arr[i]==='Reddit'){
            arr[1]-=50;
        }
        else {
            arr[1]-=0;
        }
    }
    if (arr[1]<=0){
        console.log('You have lost your salary.');   
    }
    else{
        console.log(arr[1]);   
    }
}