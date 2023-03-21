

function checkPostiveValue(){
    var arr = [1,2,3,-4,-5,-6,7,8,9,-10,11,12,13,14,15,161,-17,18,-19,-20,21,22,23,24,-25,26,27,28,29,30];
    var pos = 0; 
    var neg =0;
    var zero =0;
    var even = 0;
    var odd = 0;
    var sum = 0;
    var product=1;
    for(let a = 0 ; a < arr.length; a++){
        if(arr[a]>0){
            pos++;

        }else if(arr[a]<0){
            neg++

        }else {
            zero++;
        }
        sum = sum+arr[a];
        product = product*arr[a];
        if(arr[a]%2 == 0){
            even ++
        }else{
            odd++
        }
    }

        document.write("the number of positive elements are"+pos);
        document.write("the number of Negative elements are"+neg);
        document.write("the number of zeros elements are"+zero);
        document.write("the number of odd number elements are"+odd);
        document.write("the number of Even number elements are"+even);
        document.write("The sum of elements in array"+sum);
        document.write("the product of elements in array"+product);
    }
   

