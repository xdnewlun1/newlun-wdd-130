let work_doc = "";

function sch_apt(str){
    let page = '<!doctype html> '+
            '<html lang="en">' +
            '<head>' +
                '<meta charset="utf-8">'+
                '<title>Schedule Appointment</title>'+
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
                '<script src="js/schedule.js"></script>'+
                '<link rel="stylesheet" href="css/normalize.css">'+
                '<link rel="stylesheet" href="css/popup.css">'+
                '<link rel="preconnect" href="https://fonts.gstatic.com">'+
                '<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">'+
                '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet">'+
            '</head>'+
            '<style>'+
                'body{'+
                    'padding-left: 10px;'+
                '}'+
                '#apt-id{'+
                'display: none;' +
                '}'+
            '</style>'+
            '<body>'+
                '<form method="GET" id="contact-form">'+
                    '<h2>Schedule Covid Apt</h2>'+
                    '<p>Name<br>'+
                    '<input type="text" id="name-text" class="form-input"></p>'+
                    '<p>Date of Birth<br>'+
                    '<input type="text" id="dob-input" class="form-input"></p>'+
                    '<p>Phone Number<br>'+
                    '<input type="text" id="phne-input" class="form-input"></p>'+
                    '<p>Email<br>'+
                    '<input type="text" id="ema-input" class="form-input"></p>'+
                    '<p>Insurance<br>'+
                    '<input type="text" id="ins-input" class="form-input"></p>'+
                    'Notes<br>'+
                    '<input type="text" id="message-input">'+
                    '<br><input type="submit" value="Send Message" onclick="submitWindow()">'+
                    '<div id="apt-id">'+str+'</div>'+
                '</form>'+
            '</body>'+
            '</html>';
    let newwindow=window.open("open-apt.html","Open Apt",'height=720,width=300');
    newwindow.document.write(page);
    if(window.focus) {newwindow.focus()}
    document.getElementById(str).innerHTML = "WAITING..."
    setTimeout(function(){ document.getElementById(str).innerHTML = "Appointment Confirmed!" }, 20000);
    console.log("Test");
}

function submitWindow(){
    top.close()
}