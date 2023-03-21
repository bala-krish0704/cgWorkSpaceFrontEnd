function leapyear(){
     const yr = parseInt(document.getElementById("num").value);
    if((yr%4==0) && (yr%100!=0))
        document.getElementById("result").innerHTML = "a Leap year";
    else if(yr%400==0)
        document.getElementById("result").innerHTML = "a Leap year";
     else
        document.getElementById("result").innerHTML = "not a Leap year";
    
}