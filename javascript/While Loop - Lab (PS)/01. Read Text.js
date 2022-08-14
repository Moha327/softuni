function a(arr){
    let i=0;
    while (i<arr.length){
        if (arr[i]=='Stop'){
            break;
        }
        else if (arr[i]!='Stop'){
            console.log(arr[i]);
        }
        i++;
    }
}