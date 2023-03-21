function oddOrEven(){
    const a = document.getElementById('num').value;
    if(a%2 == 0){
       document.getElementById('result').innerHTML = "This is even number";
       
    }else{
       document.getElementById('result').innerHTML = "This is odd number";
        
    }
}