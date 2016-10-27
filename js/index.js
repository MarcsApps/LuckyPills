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
      selectList.setAttribute("id", "mySelect");
      parentElmt.appendChild(selectList);
      // Loop over the JSON array.
      jsonOptions.forEach(function(item) {
        // Create a new <option> element. Set value & text to Item
        var option = document.createElement('option');
        option.setAttribute("value", item);
        option.text = item;
        selectList.appendChild(option);  // Add the <option> element to the <parentElmt>.
      });

      } else {
     // An error occured :(

     var selectList = document.createElement("select");
     selectList.setAttribute("id", "mySelect");
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
