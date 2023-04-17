var map;
var address = "";

// Function to initialize the map with some default values
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.425073,
      lng: 150.893149
    },
    zoom: 14,
    disableDefaultUI: true
  });
 randomBetween();
}

// Function to generate random latitude and longitude, then convert that to an address
function randomBetween() {
    // Setting limits to create a box around wollongong
  var southWest = new google.maps.LatLng(-34.437578, 150.842202);
  var northEast = new google.maps.LatLng(-34.414922, 150.900957);
  var lngSpan = northEast.lng() - southWest.lng();
  var latSpan = northEast.lat() - southWest.lat();

  var myLatlng = new google.maps.LatLng(-34.425073, 150.893149);

  var randLat = southWest.lat() + latSpan * Math.random();
  var randLong = southWest.lng() + lngSpan * Math.random();

  
  // Reverse Geocoding (Long & Lat to Address, i.e. address lookup)
  const geocoder = new google.maps.Geocoder();

  const latlng = {
    lat: parseFloat(randLat),
    lng: parseFloat(randLong)
  };
    // Variable to return address
    var address;

  geocoder
    .geocode({location: latlng})
    .then((response) => {
        if (response.results[0]) {
            document.getElementById("address").innerHTML = response.results[0].formatted_address;
            moveMarker(response.results[0].formatted_address);
            
            return response.results[0].formatted_address;
        } else{
            window.alert("No results found");
        }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}

function moveMarker(address){
    const geocoder = new google.maps.Geocoder();

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
}