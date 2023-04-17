// List of Tradie Names
var tradieNames = ["Eliana Peters", "Patrick Bates", "Madilyn Castaneda", "Collin Rodgers", "Selah Juarez", "Joaquin Mason", "Sienna Powers", "Sean Curry", "Alison Zuniga", "Sincere Arellano", "Faye Galvan", "Kingsley Bender", "Lilyana Castaneda", "Collin Gomez", "Natalie Huerta", "Douglas Yoder", "Emerie Lugo", "Santos Macias", "Adley Sawyer", "Jefferson Vasquez"];

// Array to store tradies
var tradies = [];
// List of Service Types
var serviceType = ["Electrical", "Plumbing", "Carpenting"];

// Function to generate objects to store tradie information
function generateTradies() {
    for (var i = 0; i < 20; i++){
		var newTradie = {};
		
		newTradie.name = tradieNames[i];
		newTradie.distance =  50; // Hard code a random distance (i.e. 5km, 10km, 25km, 50km, etc) or random location (i.e. Wollongong, Bowral, etc)
		
        var randService = Math.floor(Math.random() * serviceType.length);

        newTradie.type = serviceType[randService]; // Random service type from a list;
		newTradie.completedJobs = [];
        tradies.push(newTradie);
	}
    
    return tradies;
}

// To-Do: Store tradie data locally


// To-Do: Generate random service requests