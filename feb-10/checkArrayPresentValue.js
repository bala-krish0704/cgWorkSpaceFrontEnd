function checkArrayPresentValue(){

    var avengers =['iron man', 'captain america','iron man','spider man','black widow','panther','x-man'];
    let temp = " ";
    for(let a = 0 ; a < avengers.length; a++){
        temp = avengers[a];
        if('s' == temp.charAt(0)){
            document.write(" s is found in array and element is "+temp);
        }

    }


}