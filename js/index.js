window.onload=function(){
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
   
        
      var rr = decodeURIComponent(request.response);
      rr=rr.slice(0, -3);
      rr=rr.substr(1);
      rr= "[" + rr + "]";
      var jrr = jQuery.parseJSON( rr );

      //var jsonOptions = JSON.parse(decodedReq);
      // Loop over the JSON array.  // JQUERY   
$.each(jrr, function (index, item) {
var d = new Date;
d=(item["Date"]);
//var e = Date(d);
var date = new Date(d);
    var f = date.toLocaleString().split(' '); 


var c = new Date;
var z =(c.toLocaleString);
    var today =  c.toLocaleString().split(' '); 
  if (f[0]===today[0]){


 
  //  var bb = today.getFullYear()+'/'+(today.getMonth()+1)+'-'+today.getDate();
    
var e= f[0]+" "+f[1]+" "+f[2]; //+" "+f[3]+" "+f[4]+" "+f[1]+" ";
    var eachrow = "<tr>"
                 + "<td>" + item["Pill"] + "</td>"
                 + "<td>" + e + "</td>"
                 + "</tr>";
          $('#LogTb').append(eachrow);
 //  (fixDate(item["Date"]));   
}  }
);};}

     // An error occured :(
     else {$('logTb').append('Error loading Table');
     }
};
// Set up and make the request.
request.open('GET','http://marcsapps.com/log.json', true);
request.send();




// /////////////////////////////////////////////////////////////////



}