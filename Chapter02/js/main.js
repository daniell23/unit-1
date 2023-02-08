//initialize function called when the script loads
function initialize(){
    cities();  
};

//function to create a table with cities and their populations
function cities(){

    //define two arrays for cities and population
    var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];
    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    };
    //connect and write the javascript into the html file
    document.querySelector("#mydiv").appendChild(table);
    // call the addColumns() and addEvents() function
    addColumns(cityPop);
    addEvents();
};
//function to add one more column into the table
function addColumns(cityPop){
    //create the loop used to loop the same times with row's numbers
    document.querySelectorAll("tr").forEach(function(row, i){
        //write the title for the header row
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
            
    		var citySize;
            //use the conditional statement to evaluate the cities' size
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
            //insert the city size attribute into the table
			row.insertAdjacentHTML ('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

//function to change the text color
function addEvents(){
    // select the elements to change the color, and the activity is mouseover
	document.querySelector("table").addEventListener("mouseover", function(){
		//create the initial variable for color value
		var color = "rgb(";
        //create the loop to fill out the 3 values of rgb color value.
		for (var i=0; i<3; i++){
            // random number through 0 - 255
			var random = Math.round(Math.random() * 255);
			color += random;
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
        // 
		document.querySelector("table").style.color = color;
	}});
    //function to achieve the pop-up fuction when you click the table
	function clickme(){

		alert('Hey, you clicked me!');
	};
	document.querySelector("table").addEventListener("click", clickme)
};
// call the initialize function 
document.addEventListener('DOMContentLoaded',initialize)