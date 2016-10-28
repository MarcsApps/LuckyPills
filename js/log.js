window.onload=function(){

// /////////////////////////////////////////////
//  Add Time
///////////////////////////////////////////////

var a = new Date().toString().split("G")[0];
document.getElementById("timeP").innerHTML = "Time: " + a;

// /////////////////////////////////////////////
//  AJAX REQUEST FOR PILL LIST
///////////////////////////////////////////////

// Get the <parentElmt> and <placeholder> elements.
var parentElmt = document.getElementById('PillList');
// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Parse the JSON
    
      var jsonOptions = JSON.parse(request.responseText);

      // marc create new select
      var selectList = document.createElement("select");
      selectList.setAttribute("id", "mySelectPill");
      parentElmt.appendChild(selectList);
      // Loop over the JSON array.
      jsonOptions.forEach(function(item) {
        // Create a new <option> element. Set value & text to Item
        var option = document.createElement('option');
        option.setAttribute("value", item);
        option.text = item;
        selectList.appendChild(option);  // Add the <option> element to the <parentElmt>.
      });
      }

     // An error occured :(
     else {
     var selectList = document.createElement("select");
     selectList.setAttribute("id", "MySelectError");
     parentElmt.appendChild(selectList);
       // Create a new <option> element. Set value & text to Item
       var option = document.createElement('option');
       option.setAttribute("value", "Error");
       option.text = "Couldn't Load Pill List!";
       selectList.appendChild(option);  //
       }
}};
//
// Set up and make the request.
request.open('GET','http://marcsapps.com/json/pills.json', true);
request.send();

// ////////////////////////////////////////////////////////////////////

// create url
//create url as "parameters"

// /////////////////////////////////////////////
// PUT LOG TO SERVER
///////////////////////////////////////////////

function postLog(){
  var myDate =  Date.now();


  var key1 = "Pill";
  var key2 = "Date";
  var value1 = $('#mySelectPill').val();
  var value2 =  (myDate);
  var myJson = {
    Pill: value1,
    Date: value2,
};
   
   
  var parameters = encodeURIComponent( JSON.stringify(myJson));
   
  console.log("Param:" + parameters)
  var uri = "//marcsapps.com/log.php?" + parameters;

  var xhr=new XMLHttpRequest();
  xhr.open('POST', uri,true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
      if (xhr.status === 200 && xhr.responseText !== ("//marcsapps.com/log.php?" + parameters)) {
          alert('Something went wrong.  Tried: '  + xhr.responseText);
      }
      else if (xhr.status !== 200) {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send(uri);

  window.location.href = 'index.html';
};


////////////////////////
// button on click post log
/////////////////////////////
document.getElementById('logPill').onclick = postLog;



}