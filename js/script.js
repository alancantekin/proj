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
    document.getElementById("header").innerHTML = "Location found";
    // create header
    let header = document.createElement("h3");
    let headerText = document.createTextNode("Coordinates");
    header.appendChild(headerText);
    // create paragraph
    let paragraph = document.createElement("p");
    let paragraphText = document.createTextNode(lat + ", " + lon);
    paragraph.appendChild(paragraphText);
    // append tags
    document.getElementsByClassName("col")[0].appendChild(header);
    document.getElementsByClassName("col")[0].appendChild(paragraph);
    // google maps url
    let url = "https://www.google.ch/maps/place/" + lat + "," + lon;
    console.log(url);
    $.get(url, function(response) {
        console.log("working");
        alert(response);
    });
}

function search(){
    let val = document.getElementById("searchValue").value;
    if(val)
        window.open("https://www.google.com/search?q=" + val, "_blank");
}