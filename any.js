var add = document.getElementById('add');
var remove = document.getElementById('removeAll');
var list = document.getElementById('list');


function adding(){
	addlis(list);
	document.getElementById('uin').value = '';
	document.getElementById('uin').focus();
} 

function addlis(targetul){
	var inputText = document.getElementById('uin').value;
	var li = document.createElement('li');
	var textNode = document.createTextNode(inputText + ' ');
	var removebutton = document.createElement('button');


	if (inputText !== '') {
		removebutton.className = 'btn btn-xs btn-danger';
		removebutton.innerHTML = ' &times;';
		removebutton.setAttribute('onclick', 'removeMe(this)');

		li.appendChild(textNode);
		li.appendChild(removebutton);
		document.body.appendChild(li);
		targetul.appendChild(li);
	}else{
		alert("please enter value")
	}
}


function removeMe(item){
	var p = item.parentElement;
	p.parentElement.removechild(p);
}

function removeAll(){
	document.getElementById('list').innerHTML="";
}




=================================================================================
<!DOCTYPE html>
<html>
<head>
	<title>TO DO list</title>
	<link rel="stylesheet" type="text/css" href="index.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
<script type="text/javascript" src="index.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>
 <link href="https://fonts.googleapis.com/css?family=Bitter|Source+Code+Pro&display=swap" rel="stylesheet">
</head>
<body>
	<div class="container-fluid text-center">
		<h1> To Do working list</h1>
		<input type="text" id="uin"  class="form-control" placeholder="what you need to do">
	<button class="btn btn-primary" id="add" onclick = "addItem()" >Add a todo</button>
	<button class="btn btn-danger" id="remove" onclick = "removeAll()">remove a todo</button>

		<ul id="list"></ul>
	</div>

</body>
</html>=======================================================

var add = document.getElementById('add');
var remove = document.getElementById('removeAll');
var list = document.getElementById('list');

function removeAll(){
    var ul = document.getElementById("list");
    var candidate = document.getElementById("uin");
    var item = document.getElementById(uin.value);
    ul.innerHTML="";
}

// function addItem(){
//     var ul = document.getElementById("list");
//     var candidate = document.getElementById("uin");

//     var li = document.createElement("li");
//     li.setAttribute('id',uin.value);
//     li.appendChild(document.createTextNode(uin.value));
//     var removebutton = document.createElement('button');
//     removebutton.className = 'btn btn-xs btn-danger';
//     removebutton.innerHTML = ' &times;';
//     removebutton.setAttribute('onclick', 'removeMe(this)');
//     ul.appendChild(li);
//     ul.appendChild(removebutton);
// }




function addItem(){
	addlis(list);
	document.getElementById('uin').value = '';
	document.getElementById('uin').focus();
} 

function addlis(targetul){
	var inputText = document.getElementById('uin').value;

	var removebutton = document.createElement('button');
			var ul = document.getElementById("list");
			    var candidate = document.getElementById("uin");

			    var li = document.createElement("li");
			    li.setAttribute('id',uin.value);
			    li.appendChild(document.createTextNode(uin.value));
			    var removebutton = document.createElement('button');

	if (inputText !== '') {
			removebutton.className = 'btn btn-xs btn-danger';
		    removebutton.innerHTML = ' &times;';
		    removebutton.setAttribute('onclick', 'removeMe(this)');
		    ul.appendChild(li);
		    ul.appendChild(removebutton);
			targetul.appendChild(ul);
	}else{
		alert("please enter value");
	}
}


function removeMe(item){
	var p = item.parentElement;
	p.parentElement.removeChild(p);

}

