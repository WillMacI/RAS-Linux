var prename = "William"
var LastName = "MacInnis"

function TopBarandSchoolDay(){
    //*Top Bar
    //Name
    fill(255);
    textStyle(BOLD);
    textSize(50);
    text(prename+" "+LastName, 10, 50); 
    
    //Date
    textStyle(ITALIC)
    textSize(30);
    var d = day();
    var m = month();
    var y = year();
    var mm = "";
    if (m == 10){
        mm = "October";
    }
 text(mm + " " + d +", "+y, 20, 90);
    
    //School Day
    textStyle(NORMAL)
    var schoolDay = 0;
    if(d==7 && m==10){
        schoolDay=1;
    }
    text("Day:  " + schoolDay, 10,130);
    //
    //*Day Book "calander"
    
}


function setup() {
    createCanvas(1440,900);
    background(193, 61, 5);
    TopBarandSchoolDay();
    
}

function draw() {
  
}