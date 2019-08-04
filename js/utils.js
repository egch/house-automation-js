function turnOnOff(imageId, btn) {    
	let image = document.getElementById(imageId);
	
	if (image.src.match("ONbulb")) {
		image.src = "images/OFFbulb.jpg";
		btn.className = "btn btn-light";
		btn.innerText = "On";
    }		
	else{
		image.src = "images/ONbulb.jpg"; 
		btn.className = "btn btn-dark";
		btn.innerText = "Off";
    }		
} 

function increaseValue(id) {    
	let field = document.getElementById(id);
	var newVal = parseFloat(field.innerText) + 1;
	field.innerText=newVal;	
} 

function decreaseValue(id) {    
	let field = document.getElementById(id);
	var newVal = parseFloat(field.innerText) - 1;
	field.innerText=newVal;	
} 