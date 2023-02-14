// This function is to avoid manipulating the data before it is fully avaliable
function debugCallback(response){
	//check the data
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: </br>' + JSON.stringify(response))
};

function debugAjax(){
	//define a variable to hold the data
	var myData;
	//basic fentch
	fetch("data/MegaCities.geojson")
		//transfer the geojson data to json data 
        .then(function(response){
            return response.json();
        }) 

		.then(function(response){
			myData = response;
			// call the callback function
			debugCallback(myData);
			//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(myData))
		})
};
//load the data by calling function
window.onload = debugAjax();