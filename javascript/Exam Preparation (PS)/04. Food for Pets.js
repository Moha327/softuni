function a(arr){
    let c=0;
    let sumdog=0;
    let sumcat=0;
    let dislast=0;
    let dog=[];
    let cat=[];
    for (let i=2; i<arr.length;i++){
        c+=Number(arr[i]);
        if (i%2==0){
            sumdog+=Number(arr[i]);
            dog.push(Number(arr[i]));
        }
        else if (i%2!=0){
            sumcat+=Number(arr[i]);
            cat.push(Number(arr[i]));
        }
    }
    for (var i=2; i<=dog.length-1;i+=3){
            dislast+=dog[i] 
    } 
    for (var i=2;i<=cat.length-1;i+=3){  
            dislast+=cat[i]
    }
    console.log(`Total eaten biscuits: ${Math.round(dislast*.1)}gr.`);
    console.log(`${((c/arr[1])*100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(((sumdog)/c)*100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(((sumcat)/c)*100).toFixed(2)}% eaten from the cat.`);
}