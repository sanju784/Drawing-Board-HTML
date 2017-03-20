
var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

var clrButton = document.getElementById('clear');

clrButton.addEventListener('click', clearCanvas));

function saveImage() {
	var data = canvas.toDataURL();
	
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {
			var response = request.responseText;
			console.log(response);
			//window.open('download.php?file='+response, '_blank', 'location=0, menubar=0');
		}
	}
	
	request.open('POST', 'save.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('img='+data);
	
}

function clearCanvas() {
	//var canvas = document.getElementById('myCanvas');
	canvas.width = canvas.width;
}
