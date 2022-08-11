function a(b,c){
    if ( b<16 && c=="m"){
               console.log("Master"); 
    }   	
    else if (c=="m" && b>=16){
               console.log("Mr.");
    }	
    else if (c=="f" && b<16){
               console.log("Miss");
     }      
   else if(c=="f" && b>=16){
               console.log("Ms.");        
   }
}