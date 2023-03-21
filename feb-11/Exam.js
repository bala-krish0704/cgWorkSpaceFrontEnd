import{Exam} from './Student';
class Exam{
    constructor(examId,examName,maximumMark){
        this.examId = examId;
        this.examName = examName;
        this.maximumMark = maximumMark;
    }   
    displayExamDetails(){
        console.log("Exam Name" +this.examName);
        console.log("Exam Id :"+this.examId);
        console.log("Maximum mark :"+this.maximumMark);
    }
}