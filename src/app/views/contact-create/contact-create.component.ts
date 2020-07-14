import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utility/utility';
import { Student } from 'src/app/models/student';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { MyToasterService } from 'src/app/utility/MyToasterService';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  public contact: Student ;
  public  showContent: boolean;
  public form: FormGroup;
  studentList: any = [];
  constructor(public utility: Utility,
              private fb: FormBuilder,
              public toastr: MyToasterService)
  {
    this.contact = {id: null, firstName: '', lastName: '', age: null, department: ''};
    this.form =  this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      age : ['',Validators.required],
      department:['']
    });
  }

  ngOnInit(): void {
  }
  public setValues(){
    this.contact.firstName =  this.form.value.firstName;
    this.contact.lastName =  this.form.value.lastName;
    this.contact.age =  this.form.value.age;
    this.contact.department =  this.form.value.department;
  }
  createContact(){
    console.log(this.contact);
    console.log('My Forms',this.form);
    this.showContent = true;;


    if (this.form.valid) {
      this.fieldDisable();
      this.setValues();
      this.toastr.showToast('Success', 'Student Added!!!', 'success');
      this.utility.setStudent(this.contact);
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
  fieldDisable() {
    this.form.disabled;
  }
}
