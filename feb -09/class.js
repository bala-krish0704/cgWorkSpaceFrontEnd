class Employee{
    //constructor keyword is used to define an constructor
    constructor(empName,empEmail){
        //this keyword is used to refer current class method or variable
        this.empName = empName;
        this.empEmail = empEmail;
    }


    //methods in class
    displayEmpDetails(){
        console.log(this.empName +"\t"+this.empEmail);
    }
}


//Object creation of Employee Class
let emp = new Employee('Bala','bala@gmail.com');
emp.displayEmpDetails();