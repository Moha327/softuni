function solve(arr){
    const name=arr[0];
    let i=2;
    let Avg=0;
  	let Avg2=0;
    let c=0;
    let un;
    let last;
    let j=1;
    while (i<arr.length){
            
            Avg+=Number(arr[i]);
            c+=1;
            i+=2;
    }
    while (j<arr.length){
            
            if (arr[j]!='Enough'){
                last=arr[j];
            }
            if (arr[j]=='Enough'){
                un='Enough';
            }
        j+=2;
    }
    Avg2=(Avg/c).toFixed(2);
    if (un){
        console.log(`Average score: ${Avg2}`);
        console.log(`Number of problems: ${c}`);
        console.log(`Last problem: ${last}`);
    }
    else{
        console.log(`You need a break, ${arr[0]} poor grades.`);
    }
}