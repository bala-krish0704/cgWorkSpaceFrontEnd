function perfectNumberCheck(){
    var num = 6;
    var checkvalue = checkPerfectNumber(num);
    try{
        if(num  != checkvalue){
            throw "It is not a perfect number"; 
        }else{
            console.log("This is perfect number");
        }
    }catch(error){
        console.log("Error message"+error);
    }
   
}
function checkPerfectNumber(num){
    var sumValue = 0;
    for(let a = 0; a<num; a++){
        if(num%a == 0)
        {
            sumValue = sumValue+a;
        }
    }
    return sumValue;
}
perfectNumberCheck();