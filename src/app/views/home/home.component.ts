import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utility/utility';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public StudentList: any = [];
  constructor(public utility: Utility,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.ViewAllStudent();
  }
  ViewAllStudent() {
    console.log(this.utility.getStudent());
    this.StudentList = this.utility.getStudent();
  }
  viewDetail(student,i){
    console.log(student);
    this.router.navigate(['home/student', student.id]);
  }
}
