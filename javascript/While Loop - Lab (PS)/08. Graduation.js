function a(arr){
    let grades = 1;
    let sum = 0;
    let average=0;
    while (grades<=12){
        if (Number(arr[grades]) >= 4.00){
                    sum += Number(arr[grades]);
                    grades++;
        }
        else if (Number(arr[grades]) < 4){
                if (Number(arr[grades]) < 4){
                        break;
                } 
                        
                else if (grade>=4){
                        sum += Number(arr[grades]);                        
                }
        }             
    }
        if (grades>=12){
            average = sum / 12;
            console.log(`${arr[0]} graduated. Average grade: ${average.toFixed(2)}`);
    }
    else{
        console.log(`${arr[0]} has been excluded at ${grades} grade`);
    }
}