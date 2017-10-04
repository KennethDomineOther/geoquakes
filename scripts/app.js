var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
 console.log("Let's get coding!");
 // CODE IN HERE!
 getGeoQ();
});

function getGeoQ() {
 $.ajax({
   method:'GET',
   url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
   datatype:'json',
   success: onSuccess,
   error: onError
 })
}
function onSuccess(json) {
 for (var i = 0; i < json.features.length; i++) {
   $('#info').append("<h5>" + json.features[i].properties.title + "</h5>");
 };

 var map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 37.78, lng: -122.44},
   zoom: 5
 });

 for (var i = 0; i < json.features.length; i++) {
   var a = json.features[i].geometry.coordinates[1];
   var b = json.features[i].geometry.coordinates[0];
   var marker = new google.maps.Marker({
     position: {lat: a, lng: b},
     map: map,
     title: 'Center!'
   });
 }

}

function onError(xhr, status, errorThrown) {
 alert("Sorry, there was a problem!");
 console.log("Error: " + errorThrown);
 console.log("Status: " + status);
 console.dir(xhr);
}
