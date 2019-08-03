function turnOnOff(id) {
    
	let image = document.getElementById(id);

	if (image.src.match("ONbulb")) {
        image.src = "images/OFFbulb.jpg"
    }		
	else{
        image.src = "images/ONbulb.jpg"; 
    }
		
} 