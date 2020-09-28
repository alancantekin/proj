function search(){
    let val = document.getElementById("searchValue").value;
    if(val)
        window.open("https://www.google.com/search?q=" + val, "_blank");
}