// Get the <parentElmt> and <placeholder> elements.
var parentElmt = document.getElementById('PillList');
var placeholder = document.getElementById('placeholder');

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
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        //option.value = item;
        // Add the <option> element to the <parentElmt>.
//        parentElmt.appendChild(option);
//
/////////////
// marc makinng options
        option.setAttribute("value", item);
        option.text = item;
        selectList.appendChild(option);

      });

    //   // Update the placeholder text.
    //   placeholder.placeholder = "e.g. datalist";
    // } else {
    //   // An error occured :(
    //   placeholder.placeholder = "Couldn't load datalist options :(";
    // }
  }
}};

// Update the placeholder text.
// placeholder.placeholder = "Loading options...";

// Set up and make the request.
request.open('GET','http://marcsapps.com/json/pills.json', true);
request.send();
