function a(a,b,c){
    a=a.split(':');
    b=b.split(':');
    c=c.split(':');
    let lose=0;
    let win=0;
    let draw=0;
    if (Number(a[0])<Number(a[1])){
        lose+=1;
    }
    else if (Number(a[0])>Number(a[1])){
        win+=1;
    }
    else if (Number(a[0])==Number(a[1])){
        draw+=1;
    }
    if (Number(b[0])<Number(b[1])){
        lose+=1;
    }
    else if (Number(b[0])>Number(b[1])){
        win+=1;
    }
    else if (Number(b[0])==Number(b[1])){
        draw+=1;
    }
    if (Number(c[0])<Number(c[1])){
        lose+=1;
    }
    else if (Number(c[0])>Number(c[1])){
        win+=1;
    }
    else if (Number(c[0])==Number(c[1])){
        draw+=1;
    }
    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${draw} `);  
}