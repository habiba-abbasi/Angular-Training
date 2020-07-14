import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utility } from 'src/app/utility/utility';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id: any;
 student= null;
  constructor(
      public activatedRoute: ActivatedRoute,
      public utility: Utility
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( res =>
      {
        this.id = res.get('id');
        this.student =this.utility.getSelectedStudent(this.id);
      }
      );
  }

}
