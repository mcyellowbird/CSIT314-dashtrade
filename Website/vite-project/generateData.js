var tradieNames = ["Eliana Peters", "Patrick Bates", "Madilyn Castaneda", "Collin Rodgers", "Selah Juarez", "Joaquin Mason", "Sienna Powers", "Sean Curry", "Alison Zuniga", "Sincere Arellano", "Faye Galvan", "Kingsley Bender", "Lilyana Castaneda", "Collin Gomez", "Natalie Huerta", "Douglas Yoder", "Emerie Lugo", "Santos Macias", "Adley Sawyer", "Jefferson Vasquez"];

var tradies = [];
var serviceType = ["Electrical", "Plumbing", "Carpenting"];

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
}



/*function populateTradies() {
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
    }
}*/

// Global variables used in the populateTradies function

var eCount = 0;
var pCount = 0;
var cCount = 0;

function populateTradies(){
    for (var i = 0; i < tradies.length; i++){
        /*var newTD = '<td><img src="public/vite.svg"><h3>';
        newTD += tradies[i].name;
        newTD += '</h3><button class="button">View</button></td>';*/

        // New Data
        var newTD = document.createElement('td');
        var newIMG = document.createElement('img');
        var newCompanyName = document.createElement('h3');
        var newButton = document.createElement('button');

        newTD.classList.add("CompanyTD");
        newIMG.src = "public/vite.svg";
        newCompanyName.innerText = tradies[i].name;
        newButton.textContent = "View";
        newButton.classList.add("button");

        newTD.appendChild(newIMG);
        newTD.appendChild(newCompanyName);
        newTD.appendChild(newButton);

        // View more services button 

        var mSTD = document.createElement('td');
        var mSpan = document.createElement('span');
        var mP = document.createElement('p');

        mSTD.classList.add("arrowData");
        mSpan.style = "font-size: 50px;";
        mSpan.textContent = "→"
        mP.textContent = "View more services";

        mSTD.appendChild(mSpan);
        mSTD.appendChild(mP);

        // Adding New Data to each section
        if (tradies[i].serviceType = "Electrical" && eCount < 5){
            var row = document.getElementById("electricalList");
            row.appendChild(newTD);
            eCount++;

            if (eCount >= 5){
                document.getElementById("electricalList").appendChild(mSTD);
            }
        }
        else if (tradies[i].serviceType = "Plumbing" && pCount < 5){
            var row = document.getElementById("plumbingList");
            row.appendChild(newTD);
            pCount++;

            if (pCount >= 5){
                document.getElementById("plumbingList").appendChild(mSTD);
            }
        }
        else if (tradies[i].serviceType = "Carpenting" && cCount < 5){
            var row = document.getElementById("carpentingList");
            row.appendChild(newTD);
            cCount++;

            if (cCount >= 5){
                document.getElementById("carpentingList").appendChild(mSTD);
            }
        }
    }
}