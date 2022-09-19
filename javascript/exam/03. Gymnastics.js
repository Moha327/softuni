function a(a,b){
    let sum=0;
    let abs=0;
    let persentage=0;
    if (a=='Russia' && b=='ribbon'){
        sum=9.100+9.400;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Russia' && b=='hoop'){
        sum=9.300+9.800;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Russia' && b=='rope'){
        sum=9.600+9.000;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Bulgaria' && b=='ribbon'){
        sum=9.600+9.400;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Bulgaria' && b=='hoop'){
        sum=9.550+9.750;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Bulgaria' && b=='rope'){
        sum=9.500+9.400;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Italy' && b=='ribbon'){
        sum=9.200+9.500;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Italy' && b=='hoop'){
        sum=9.450+9.350;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    else if (a=='Italy' && b=='rope'){
        sum=9.700+9.150;
        abs=Math.abs(20-sum);
        persentage=(abs/20)*100;
    }
    console.log(`The team of ${a} get ${sum.toFixed(3)} on ${b}.`);
    console.log(` ${persentage.toFixed(2)}%`);
}