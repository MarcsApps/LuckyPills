

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
        var y=[];
        var x = request.responseText;
       y= x.replace(/{/g,"");
        y=y.replace(/}/g,"");
         y=y.replace(/"/g,"");
         y=y.replace(/Pill/g,"<br>Pill");
        var z =[]
        z=y.split("<br>");
          document.getElementById('logUL').innerHTML=z[2];
          // document.getElementById('logUL').innerHTML=x;




      // var jsonOptions = JSON.parse(request.responseText);

      // marc create new select
      // var selectList = document.createElement("li");
      //selectList.setAttribute("id", "ulLog");
      // parentElmt.appendChild(selectList);
      // Loop over the JSON array.
       var dataLog 
       //console.log(item);
      // jsonOptions.forEach(function(item) {
        z=z.splice(1,z.length)
          var arrayLength = z.length;
          for (var i =0; i < arrayLength; i++) {
               
    //Do something

        // Create a new <option> element. Set value & text to Item
        // var option = document.createElement('li');

        // option.setAttribute("text", item);
        // option.text = item;
        // selectList.appendChild(option);  // Add the <option> element to the <parentElmt>.
       
          dataLog = (dataLog? dataLog : "" )+ "<td> " + z[i] + "</tdS> <br>";
          
}
          dataLog=dataLog.replace(/,/g,"    ")
          document.getElementById('logUL').innerHTML=dataLog;
               };
      }

     // An error occured :(
     else {
      document.getElementById('logUL').innerHTML=('Error Loading LOG: ' + x);
      // // Create a new <option> element. Set value & text to Item
      //  var option = document.createElement('p');
      //  option.setAttribute("value", "Error");
      //  option.text = "Couldn't Load Log List!";
      //  selectList.appendChild(option);  //
       }
};
//
// Set up and make the request.
request.open('GET','http://marcsapps.com/log.json', true);
request.send();
