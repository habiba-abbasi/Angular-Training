import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  public contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};
  public  showContent: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  createContact(){
    console.log(this.contact);
    // this.contact = {id: null, name: "", description: "", email: ""};
    this.showContent = true;
    console.log(this.showContent);
  }
}
