

// /////////////////////////////////////////////
//  Add Time
///////////////////////////////////////////////

var a = new Date().toString().split("G")[0];
document.getElementById("timeP").innerHTML = "Time: " + a


// ///////////////////////////////////////////

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
     selectList.setAttribute("id", "mySelectPill2");
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


//var obj = jsonLog
//
// var str = Object.keys(obj).map(function(key){
//   return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
// }).join('&');
//
// var url = "//marcsapps.com/test.php?log=" + str
// console.log(url);}

// ====================================================
// create url
//create url as "parameters"

// /////////////////////////////////////////////
// PUT LOG TO SERVER
///////////////////////////////////////////////

function postLog(){
  var myDate =  Date.now();
  // var logj ={
  //     "pill" : "MyNewPill",
  //     "date" : myDate}

  var pillvalue = encodeURIComponent(document.getElementById('mySelectPill').value) ;
  var datevalue = encodeURIComponent(myDate);
  var parameters="Pill="+pillvalue+"&Date="+datevalue;
  console.log(parameters);
  // create xml http req

  var xhr=new XMLHttpRequest();
  xhr.open('POST', "//marcsapps.com/log.php?" + parameters,true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
      if (xhr.status === 200 && xhr.responseText !== ("//marcsapps.com/log.php?" + parameters)) {
          alert('Something went wrong.  Tried: '  + xhr.responseText);
      }
      else if (xhr.status !== 200) {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };

  xhr.send("//marcsapps.com/log.php?" + parameters);

  window.location.href = 'index.html';
};


////////////////////////
// button on click post log
/////////////////////////////
document.getElementById('logPill').onclick = postLog;


///////////////////////
