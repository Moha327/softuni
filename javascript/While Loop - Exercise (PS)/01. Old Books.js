function solve(arr){
    let i=1;
    let c=false;
    let name=arr[0];
  	let array = arr[i];
    while (array!=='No More Books'){
        if (array=== name){
            c=true;
          	break;
        }       
        i++;
      	array = arr[i];
    }
    if(c===false){   
            console.log(`The book you search is not here!`);
            console.log(`You checked ${i-1} books.`);
    }   
     else {
            console.log(`You checked ${i-1} books and found it.`);
     }   
}