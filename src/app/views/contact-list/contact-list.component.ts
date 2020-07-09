import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utility/utility';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public stud: {id, firstName, lastName, age, department};
  public StudentList: any = [];
  public enableEdit: boolean;
  public index: number;
  constructor(public utility: Utility) {
    this.enableEdit = false;
    this.stud = {id: null, firstName: '', lastName: '', age: '', department: ''};
   }

  ngOnInit(): void {
    this.ViewAllStudent();
  }
  ViewAllStudent() {
    console.log(this.utility.getStudent());
    this.StudentList = this.utility.getStudent();
  }
  public editRecord(student,i){
  this.enableEdit =true;
  this.stud = student;
  this.index = i;

  }
  public updateRecord(){
   this.utility.updateStudent(this.stud,this.index);
  }
}
