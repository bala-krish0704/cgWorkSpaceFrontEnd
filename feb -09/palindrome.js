function palindrome(){
    const val = document.getElementById('num').value;
    const len = val.length;
    for(let i = 0 ; i < len/2; i++){
        if(val[i]!=val[len-1-i]){
            document.getElementById('result').innerHTML = "This is not palindrome";
            return ;
        }else{
            document.getElementById('result').innerHTML = "This is palindrome";
        }
    }

    }