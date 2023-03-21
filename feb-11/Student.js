export class Student{
    constructor(studentId,studentName,studentAge){
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;

    } 
    displayStudentDetails(){
        console.log("Student name :"+this.studentName);
        console.log("Student Id :" +this.studentId);
        console,log("Student age"+this.studentAge);
    }
}