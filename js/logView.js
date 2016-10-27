

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
        document.getElementById('logUL').innerHTML=request.responseText
      var jsonOptions = JSON.parse(request.responseText);

      // marc create new select
      var selectList = document.createElement("li");
      //selectList.setAttribute("id", "ulLog");
      parentElmt.appendChild(selectList);
      // Loop over the JSON array.
      jsonOptions.forEach(function(item) {
        // Create a new <option> element. Set value & text to Item
        var option = document.createElement('li');

        option.setAttribute("text", item);
        option.text = item;
        selectList.appendChild(option);  // Add the <option> element to the <parentElmt>.
      });
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
