var tradieNames = ["Eliana Peters", "Patrick Bates", "Madilyn Castaneda", "Collin Rodgers", "Selah Juarez", "Joaquin Mason", "Sienna Powers", "Sean Curry", "Alison Zuniga", "Sincere Arellano", "Faye Galvan", "Kingsley Bender", "Lilyana Castaneda", "Collin Gomez", "Natalie Huerta", "Douglas Yoder", "Emerie Lugo", "Santos Macias", "Adley Sawyer", "Jefferson Vasquez"];

var tradies = [];
var serviceType = ["Roof Cleaning"];

function generateTradies() {
    for (var i = 0; i < 20; i++){
		var newTradie = {};
		
		newTradie.name = tradieNames[i];
		newTradie.distance =  50; // Hard code a random distance (i.e. 5km, 10km, 25km, 50km, etc) or random location (i.e. Wollongong, Bowral, etc)
		newTradie.type = serviceType[0]; // Random service type from a list;
		newTradie.completedJobs = [];
        tradies.push(newTradie);
	}
}

// Global variables used in the populateTradies function to allow the setTimeout function to work
var i = 0;
var count = 0;
var rowCount = 1;

function populateTradies() {
    setTimeout(function() {
    if (i < tradies.length){
        if (count >= 6){
            count = 0;
            rowCount++;
            var newRow = document.createElement("div");
            newRow.classList.add("serviceRow");
            document.getElementById("services").appendChild(newRow);
        }
        var tradie = tradies[i];
        
        var newDiv = document.createElement("div");
		newDiv.classList.add("service");
        
        var newService = "";
        newService += "<p>" + tradie.name + "</p>";
        newService += "<p>" + tradie.distance + "</p>";
        newService += "<p>" + tradie.type + "</p>";
        newService += "<input type='button'>";
        
        newDiv.innerHTML = newService;
        
        var nextRow = document.getElementById("services").children[rowCount-1]; // change to services then add rows dynamically
        nextRow.appendChild(newDiv);
        
        count++;
        i++;
        if (i < tradies.length){
            populateTradies();
        }
    }}, 40)
}