function a(num1,num2){
    let c=0;
    let s=[];
    for (var i=num1;i<=num2;i++){
        if (i%9==0){
            c+=i;   
        }
    }
    console.log(`The sum: ${c}`);
    for (var i=num1;i<=num2-1;i++){
        if (i%9==0){
            console.log(i);
        }
    }
}