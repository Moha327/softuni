function solve(days, room, feedback){
    let overnights=0;
    let dis=0;
    let dis2=0;
    let dis3=0;
    if(room == 'apartment'){
        if (days<10){
            overnights=days-1;
            if (feedback=='positive'){
                dis= overnights*25;
                dis2=dis-dis*.3;
                dis3=dis2+.25*dis2;
                console.log(dis3.toFixed(2));
            }
            else if (feedback=='negative'){
                dis= overnights*25;
                dis2=dis-dis*.3;
                dis3=dis2-.1*dis2;
                console.log(dis3.toFixed(2));
            }
        }
        else if (days>=10 && days<=15){
            overnights=days-1;
            if (feedback=='positive'){
                dis= overnights*25;
                dis2=dis-dis*.35;
                dis3=dis2+.25*dis2;
                console.log(dis3.toFixed(2));
            }
            else if (feedback=='negative'){
                dis= overnights*25;
                dis2=dis-dis*.35;
                dis3=dis2-.1*dis2;
                console.log(dis3.toFixed(2));
            }
        }
        else if (days>15){
            overnights=days-1;
            if (feedback=='positive'){
                dis= overnights*25;
                dis2=dis-dis*.5;
                dis3=dis2+.25*dis2;
                console.log(dis3.toFixed(2));
            }
            else if (feedback=='negative'){
                dis= overnights*25;
                dis2=dis-dis*.5;
                dis3=dis2-.1*dis2;
                console.log(dis3.toFixed(2));
            }
        }
    }
    else if(room == 'president apartment'){
        if (days<10){
            overnights=days-1;
            if (feedback=='positive'){
                dis= overnights*35;
                dis2=dis-dis*.1;
                dis3=dis2+.25*dis2;
                console.log(Number(dis3).toFixed(2));
            }
            else if (feedback=='negative'){
                dis= overnights*35;
                dis2=dis-dis*.1;
                dis3=dis2-.1*dis2;
                console.log(Number(dis3).toFixed(2));
            }
        }
        else if (days>=10 && days<=15){
            overnights=days-1;
            if (feedback=='positive'){
                dis= overnights*35;
                dis2=dis-dis*.15;
                dis3=dis2+.25*dis2;
                console.log(Number(dis3).toFixed(2));
            }
            else if (feedback=='negative'){
                dis= overnights*35;
                dis2=dis-dis*.15;
                dis3=dis2-.1*dis2;
                console.log(Number(dis3).toFixed(2));
            }
        }
        else if (days>15){
            overnights=days-1;
            if (feedback=='positive'){
                dis= overnights*35;
                dis2=dis-dis*.1;
                dis3=dis2+.25*dis2;
                console.log(Number(dis3).toFixed(2));
            }
            else if (feedback=='negative'){
                dis= overnights*35;
                dis2=dis-dis*.2;
                dis3=dis2-.1*dis2;
                console.log(Number(dis3).toFixed(2));
            }
        }
    }
    else if(room == 'room for one person'){
            overnights=days-1;
            if (feedback=='positive'){
                console.log((overnights*18+(overnights*18)*.25).toFixed(2));
            }
            else if (feedback=='negative'){
                console.log((overnights*18-(overnights*18)*.1).toFixed(2));
            }
    }
}