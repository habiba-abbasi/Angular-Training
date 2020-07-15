import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utility/utility';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/utility/HttpService';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public StudentList: any = [];
  public Users: any = [];
  constructor(public utility: Utility,
              private route: ActivatedRoute,
              private router: Router,
              public httpService: HttpService ) { }

  ngOnInit(): void {
    this.ViewAllStudent();
  }
  ViewAllStudent() {
    console.log(this.utility.getStudent());
    // this.StudentList = this.utility.getStudent();
    this.httpService.getAll(1).pipe(first())
   .subscribe((users : any) => {
     this.Users = users.data;
    });
  }
  viewDetail(student,i){
    console.log(student);
    this.router.navigate(['home/student', student.id]);
  }
}
