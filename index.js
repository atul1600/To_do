var nodelist = document.getElementsByTagName('li');
var i;
for (var i = 0; i < nodelist.length; i++) {

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
      
    }

var close = document.getElementsByClassName("close");
var i;
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newElement(){
  var li = document.createElement("li");
  var inputvalue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputvalue);
  li.appendChild(t);

  if (inputvalue === "") {
    alert("you must enter something")
  }else{
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display="none";
    }
  }

}