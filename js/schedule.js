function sch_apt(str){
    let newwindow=window.open("open-apt.html","Open Apt",'height=500,width=300');
    apt_code = str;
    if(window.focus) {newwindow.focus()}
    newwindow.document.append("<p id='hid-inf'>"+str+"</p>")
    return false;
}

function submitWindow(){
    alert(document.getElementById('info-stor').value)
    top.window.close()
}