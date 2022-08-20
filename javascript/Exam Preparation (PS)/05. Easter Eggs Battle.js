function a(arr){
    let player1=Number(arr[0])
    let player2=Number(arr[1])
    for (let i=1;i<=arr.length-1;i++){
        if (arr[i]=='one'){
            player2-=1
        }
        else if (arr[i]=='two'){
            player1-=1
        }
        else if (arr[i]=='End'){
            break
        }
    }
    if (player1!=0 && player2!=0){
        console.log(`Player one has ${player1} eggs left.`)
        console.log(`Player two has ${player2} eggs left.`)
    }
    else if (player1==0 && player2!=0){
        console.log(`Player one is out of eggs. Player two has ${player2} eggs left.`)
    }
    else if (player1!=0 && player2==0){

        console.log(`Player two is out of eggs. Player one has ${player1} eggs left.`)
    }
    else if (player1==0 && player2==0){
        console.log(`Player one is out of eggs.`)
        console.log(`Player two is out of eggs.`)
    }
}