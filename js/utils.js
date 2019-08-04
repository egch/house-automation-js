function turnOnOff(id) {    
	let image = document.getElementById(id);
	if (image.src.match("ONbulb")) {
        image.src = "images/OFFbulb.jpg"
    }		
	else{
        image.src = "images/ONbulb.jpg"; 
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