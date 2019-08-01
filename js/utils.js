function turnOnOff() {
    // taking image in image variable 	
    var image = document.getElementById('Image'); 

	//Match the image name 
	//whether it is ONbulb or OFFbulb 
	//change image to OFFbulb.jpg if 
	//it match with ONbulb otherwise 
	//change it to ONbulb.jpg --> 
	if (image.src.match("ONbulb")) {
        image.src = "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"; 
    }		
	else{
        image.src = "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"; 
    }
		
} 