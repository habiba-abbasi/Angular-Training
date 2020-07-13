import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable()

export class Utility {

  studentList: any = [];
  public stud : Student;

  setStudent(student: any){
    // tslint:disable-next-line: max-line-length
    this.studentList.push({id : null, firstName:  student.firstName, lastName:student.lastName , age: student.age, department: student.department});
    // this.studentList= tempStudentList;
    console.log( "ShowData",this.studentList);
  }
  getStudent(){
    return this.studentList;
  }
  updateStudent(student: Student, index: number){
    this.studentList[index] = student;
  }
}
