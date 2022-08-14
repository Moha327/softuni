function solve(arr){
    let i=0;
  	let c=0;
    while (i<=arr.length-1){
        if (arr[i]!='Going home'){
            c+=Number(arr[i]);
        }
        i++;
    }
    if (c>10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${c-10000} steps over the goal!`);
    }
    else if (c<10000){
        console.log(`${10000-c} more steps to reach goal.`);
    }
}