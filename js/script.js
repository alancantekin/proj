var x = document.getElementById("city");

$(document).ready(function() {
    var position;
    if (navigator.geolocation) {
        position = navigator.geolocation.getCurrentPosition(get_api);
    } else { 
        document.getElementById("city").innerHTML = "Failed to determinate location";
    }
});

function get_api(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    document.getElementById("city").innerHTML = lat + ", " + lon;
    let url = "https://www.google.ch/maps/place/" + lat + "," + lon;
    console.log(url);
    $.get(url, function(response) {
        console.log("working");
        alert(response);
    });
}