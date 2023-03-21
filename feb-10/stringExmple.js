var demo = "Hi How are you mam";
function stringOperation(){
    var sentence = demo.split(" ");
    for(let s in sentence){
        console.log(sentence[s]);

    } for(let a in sentence){
        const value = checkPalindrome(sentence[a]);
        console.log(sentence[a]+" "+value);
    }
}
function checkPalindrome(sentence) {
    const len = sentence.length;  
    for (let i = 0; i < len / 2; i++) {
        if (sentence[i] !== sentence[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
stringOperation();