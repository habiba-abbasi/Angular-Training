import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable()

export class Utility {

  studentList: any =[{id : 101,
                      firstName:  'Habiba',
                      lastName:'Abbasi' ,
                      age: '23',
                      department: 'CS'},
                      {id : 102,
                        firstName:  'Habib',
                        lastName:'Abbas' ,
                        age: '24',
                        department: 'SE'},
                      {id : 103,
                          firstName:  'Nida',
                          lastName:'Ali' ,
                          age: '25',
                          department: 'ME'
                         },{
                          id : 104,
                          firstName:  'Fatima',
                          lastName:'Saleem' ,
                          age: '26',
                          department: 'EE'
                         },{
                          id : 105,
                          firstName:  'M.',
                          lastName:'Younus' ,
                          age: '27',
                          department: 'BBA'
                         }];
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
  getSelectedStudent(id){
   let data = null;
    this.studentList.filter(function(item){
      if(item.id == id) {
         data=item;
         console.log(item);
          return;
      }
    });
   return data;
  }
}
