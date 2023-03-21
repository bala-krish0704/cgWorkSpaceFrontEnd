//Normal Function
function normalFunction(){
    document.write("Normal Function");
}

//Functional Expression

let printValue = function(){
    document.write("Functional Expression");
}

//Arrow expression

let showValue = () => document.write("Arrow Expression");



//Fatty Arrow Expression

let additionOfTwoNumber = (a,b) =>{
    document.write("The addition of two number is \n");
    document.write(a+b);
}

//fatty Arra Expression


let divisionOfTwoNumber = (a,b) =>{
    document.write("The division of two number");
    if(a>b){
        document.write(a/b);
    }else{
        document.write(b/a);
    }

}
