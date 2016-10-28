
// /////////////////////////////////////////////
//  Add Time
///////////////////////////////////////////////

var a = new Date().toString().split("G")[0];
document.getElementById("timeP").innerHTML = "Time: " + a;
// ///////////////////////////////////////////
 
  
// /////////////////////////////////////////////
//  AJAX REQUEST FOR PILL LIST
////////////////////////////////////////////////
// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Parse the JSON
  //      document.getElementById('logUL').innerHTML=request.responseText
      var jsonOptions = JSON.parse(request.responseText);
      // Loop over the JSON array.  // JQUERY   
 $.each(jsonOptions, function (index, item) {
    var eachrow = "<tr>"
                 + "<td>" + item["Pill"] + "</td>"
                 + "<td>" + item["Date"] + "</td>"
                 + "</tr>";
          $('#LogTb').append.innerHTML(eachrow);
            //  console.log(fixDate((item["Date"])));
     $('#test'').innerHTML("test") ;
});
      };
     //document.getElementById('tlog').appendChild= [resultj];
      }

     // An error occured :(
     else {
    $('logTb').append('Error loading Table'); 
    
       }
};
// Set up and make the request.
request.open('GET','http://marcsapps.com/log.json', true);
request.send();

///////////////////////////
// function fixDate(d){
// var dd = new date(d);



// console.log(dd);
// return dd;
// }