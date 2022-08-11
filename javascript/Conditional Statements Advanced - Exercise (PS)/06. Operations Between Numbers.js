function a(num1,num2,operation){
    num1=Number(num1);
    num2=Number(num2);
    let result=0;
    if (operation=='-'){
        result=(num1-num2);
            if (result%2==0){
                console.log(`${num1} - ${num2} = ${result} - even`);
        }
            else if (result%2!=0){
                console.log(`${num1} - ${num2} = ${result} - odd`);
        }
    }
        else if (operation=='+'){
        result=(num1+num2);
            if (result%2==0){
                console.log(`${num1} + ${num2} = ${result} - even`);
        }
            else if (result%2!=0){
                console.log(`${num1} + ${num2} = ${result} - odd`);
        }
    }
        else if (operation=='*'){
        result=(num1*num2);
            if (result%2==0){
                console.log(`${num1} * ${num2} = ${result} - even`);
        }
            else if (result%2!=0){
                console.log(`${num1} * ${num2} = ${result} - odd`);
        }
    }
    else if (operation=='/'){
            if (num2==0){
            console.log(`Cannot divide ${num1} by zero`);
        }
            else{
            result=(num1/num2);
                console.log(`${num1} / ${num2} = ${result.toFixed(2)} `);
        }
    }
        else if (operation=='%'){
            if (num2==0){
            console.log(`Cannot divide ${num1} by zero`);
        }
            else{
            result=(num1%num2);
                console.log(`${num1} % ${num2} = ${result} `);
        }
    }
}