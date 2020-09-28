
//#region Location Determinator
$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else { 
        document.getElementById("city").innerHTML = "Failed to determinate location";
    }
});

function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // initMap(lat, lon);
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
}
//#endregion