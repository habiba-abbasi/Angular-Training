import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utility } from 'src/app/utility/utility';
import { Student } from 'src/app/models/student';
import { HttpService } from 'src/app/utility/HttpService';
import { first } from 'rxjs/operators';

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
      public utility: Utility,
      public httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( res =>
      {
        this.id = res.get('id');
        // this.student =this.utility.getSelectedStudent(this.id);
        this.httpService.getSingle(this.id).pipe(first())
        .subscribe((user : any) => {
          this.student = user.data;
         });
      }
      );
  }

}
