var mypostrequest=new ajaxRequest()
mypostrequest.onreadystatechange=function(){
 if (mypostrequest.readyState==4){
  if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
   document.getElementById("result").innerHTML=mypostrequest.responseText
  }
  else{
   alert("An error has occured making the request")
  }
 }
}
var namevalue=encodeURIComponent(document.getElementById("name").value)
var agevalue=encodeURIComponent(document.getElementById("age").value)
var parameters="name="+namevalue+"&age="+agevalue
mypostrequest.open("POST", "basicform.php", true)
mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
mypostrequest.send(parameters)
====================================================
// create url
//create url as "parameters"
var pillvalue=encodeURIComponent(document.getElementById("mySelectPill").value)
var datevalue=encodeURIComponent(myDate)
var parameters="Pill="+pillvalue+"&Date="+datevalue

// create xml http req

var xhr=new XMLHttpRequest();
xhr.open('POST', parameters);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200 && xhr.responseText !== newName) {
        alert('Something went wrong.  Tried: ' + xhr.responseText);
    }
    else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.open("POST", "log.php", true)
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xhr.send(parameters);
