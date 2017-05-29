function isPrimeHome(num) {
 if (isNaN(num) || !isFinite(num) || num % 1 || num <2){
     //եթե պարամետրը թիվ է , չի բաժանվում 1-ի վրա ու փոքր է 2-ից  ֆունկցիան կանգնեցնում ենք 
     console.log("false");
      return false; 
 }
 if (num % 2 == 0){ 
     return (num ==2);
 }  
    
 var m = Math.sqrt(num); // կլորացնում ենք թիվը
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