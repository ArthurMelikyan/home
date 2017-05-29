function isPrimeHome(num) {
 if (isNaN(num) || !isFinite(num) || num % 1 || num < 2){ 
     console.log("false");
      return false; 
 }
 if (num % 2 == 0){ 
     return (num ==2);
 }  
    
 var m = Math.sqrt(num); 
 for (var i = 5; i <= m; i += 6) {
  if (num % i == 0){
      console.log("false");
     return false;
  }
  if (num % (i + 2) ==0) {
      console.log("false");
      return false;
  }
 }
 console.log("true");
 return true;
}
 isPrimeHome(15);
 isPrimeHome(11);
 isPrimeHome("blabla");
 isPrimeHome(1.25);
 isPrimeHome(1);