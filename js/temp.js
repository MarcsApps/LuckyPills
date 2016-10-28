 
  var parameters="Pill="+pillvalue+"&Date="+datevalue


  encodeURIComponent
  var pillvalue = encodeURIComponent(document.getElementById('mySelectPill').value) ;
  var datevalue = encodeURIComponent(myDate);

   var json = [ {"1" : "Sudipta"}, {"2" : "Goswami"}, {"3" : "FirstName"}, {"4" : "LastName"} ]; 

   
  var key1 = "Pill";
  var key2 = "Date";
  var value1 = $('#mySelectPill').val();
  var value2 =  (myDate);
  
  var myJson = [ {key1:value1},{key2:value2}]
  alert(myJson);
  console.log( $.param(myJson, true));
  

