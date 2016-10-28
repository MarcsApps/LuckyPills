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
      var jrr = jQuery.parseJSON( rr );

       





      //var jsonOptions = JSON.parse(decodedReq);
      // Loop over the JSON array.  // JQUERY   
$.each(jrr, function (index, item) {
    var eachrow = "<tr>"
                 + "<td>" + item["Pill"] + "</td>"
                 + "<td>" + item["Date"] + "</td>"
                 + "</tr>";
          $('#LogTb').append(eachrow);
 //  (fixDate(item["Date"]));   
}
);};}

     // An error occured :(
     else {$('logTb').append('Error loading Table');
     }
};
// Set up and make the request.
request.open('GET','http://marcsapps.com/log.json', true);
request.send();

// /////////////////////////
// function fixDate(d){
// console.log(d);
// var date=(new Date("1477555582614"));
// alert(date.getHours);
// //  alert(dd);
// }



}