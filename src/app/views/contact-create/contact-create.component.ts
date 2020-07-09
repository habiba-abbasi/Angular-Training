import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utility/utility';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  public contact : {id, firstName, lastName, age, department} = {id: null, firstName: "",lastName: "", age: "", department: ""};
  public  showContent: boolean;
  studentList:any = [];
  constructor(public utility: Utility) { }

  ngOnInit(): void {
  }
  createContact(){
    console.log(this.contact);
    // this.contact = {id: null, name: "", description: "", email: ""};
    this.showContent = true;
    // this.studentList.push(this.contact);
    this.utility.setStudent(this.contact);
    console.log(this.showContent);
  }
}
