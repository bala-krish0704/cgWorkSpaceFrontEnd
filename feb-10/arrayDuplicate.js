function duplicateArray(){
    var avengers =['iron man', 'captain america','iron man','spider man','black widow','panther'];
    for(let a = 0 ; a < avengers.length; a++){
        for(let b= a+1; b < avengers.length; b++){
            if(avengers[a] == avengers[b]){
                document.write(avengers[a]+"is duplicated");
            }
        }
    }
}