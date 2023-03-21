function ReverseLetterAndWord(){
    var string ="i evol uoy os !hcum";
     var sentence = string.split(" ");
     var finalString ="";
     var value
     for(let w in sentence){
        var value = reverseString(sentence[w]);
        //console.log(value);
        finalString = finalString.concat(value);
        finalString = finalString.concat(" ");
     }
     console.log(finalString);


}
function reverseString(str){
        var splitString = str.split(""); 
        var reverseArray = splitString.reverse()
        var joinArray = reverseArray.join("");
        return joinArray;
    }



ReverseLetterAndWord();