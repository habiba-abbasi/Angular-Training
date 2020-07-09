import { Injectable } from '@angular/core';

@Injectable()

export class Utility {

  studentList: any = [];
  public stud : {id, firstName, lastName, age, department}= {id: null, firstName: "",lastName: "", age: "", department: ""};

  setStudent(student: any){
    // tslint:disable-next-line: max-line-length
    this.studentList.push({id : null, firstName:  student.firstName, lastName:student.lastName , age: student.age, department: student.department});
    // this.studentList= tempStudentList;
    console.log( "ShowData",this.studentList);
  }
  getStudent(){
    return this.studentList;
  }
  updateStudent(student: any, index: number){
    this.studentList[index] = student;
  }
}
