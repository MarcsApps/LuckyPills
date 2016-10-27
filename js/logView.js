
// /////////////////////////////////////////////
//  Add Time
///////////////////////////////////////////////

var a = new Date().toString().split("G")[0];
document.getElementById("timeP").innerHTML = "Time: " + a


// ///////////////////////////////////////////

// /////////////////////////////////////////////
//  AJAX REQUEST FOR PILL LIST
///////////////////////////////////////////////

// Get the <parentElmt> div elements.
var parentElmt = document.getElementById('logUL');
// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Parse the JSON
  //      document.getElementById('logUL').innerHTML=request.responseText
      var jsonOptions = JSON.parse(request.responseText);
      var z = jsonOptions[0]
   //         document.getElementById('logUL').innerHTML=z['Date'];
      // marc create new select
      var x = 0;
      var tdj=[];
      var htmlj;
      var resultj;
      // Loop over the JSON array.
      jsonOptions.forEach(function(j) {
      x=x+1;
         
      resultj=(htmlj?htmlj:"") + '<tr> <td>' + j["Pill"] + '</td><td>' + j["Date"]+'</td></tr>' 
       document.getElementById('logTb').appendChild= [resultj];

   
      });
     //document.getElementById('tlog').appendChild= [resultj];
      }

     // An error occured :(
     else {
     var selectList = document.createElement("p");
     selectList.createElement.innerHTML('p')= "error loading Log!";
     parentElmt.appendChild(selectList);
       // Create a new <option> element. Set value & text to Item
      //  var option = document.createElement('p');
      //  option.setAttribute("value", "Error");
      //  option.text = "Couldn't Load Log List!";
      //  selectList.appendChild(option);  //
       }
}};
//
// Set up and make the request.
request.open('GET','http://marcsapps.com/log.json', true);
request.send();