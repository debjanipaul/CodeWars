// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']


function capitalize(s){

   	var eveUpper = "";
  	var oddUpper = "";
  
  	for(var i = 0; i< s.length; i++){
   		if(i % 2 === 0){
     		eveUpper += s[i].toUpperCase();
   	  
   	}else {
            eveUpper+= s[i];
         }        
         
  	}//End of for loop

  
  	for( i = 0; i< s.length; i++){
  		if(i % 2 !== 0){
    
    		 oddUpper += s[i].toUpperCase();
     
   	}else {
            oddUpper+= s[i];
         }  
  	}//End of for loop

	return [eveUpper, oddUpper]; //return in an array
}

capitalize("abcdef");