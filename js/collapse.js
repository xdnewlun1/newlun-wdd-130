function collapse(id, butid){
    document.getElementById(butid).classList.toggle("active");
    var content = document.getElementById(id);
    if(content.style.display === "block"){
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}