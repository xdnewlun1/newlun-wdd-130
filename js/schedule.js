let work_doc = "";

function sch_apt(str){
   
    let newwindow=window.open("open-apt.html","Open Apt",'height=500,width=300');
    apt_code = str;
    if(window.focus) {newwindow.focus()}
    work_doc = document;
}

function submitWindow(){
    top.window.close()
    work_doc.getElementById("Conf-Apt").innerHTML = "Appointment Confirmed";
}