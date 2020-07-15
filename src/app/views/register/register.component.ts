import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/utility/HttpService';
import { first } from 'rxjs/operators';
import { MyToasterService } from 'src/app/utility/MyToasterService';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user: User;
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      public httpService: HttpService,
      public toastr: MyToasterService
  ) {
      this.user = new User();
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.user.email = this.registerForm.value.email.toString();
      this.user.password = this.registerForm.value.password;

      this.httpService.register(this.user).pipe( first())
      .subscribe(data =>{
        this.toastr.showToast('Success', 'Registration successful', 'Success');
        this.router.navigate(['/login']);
      }),
       error => {
                  this.toastr.showToast('Error', error, 'Failed');
                  this.loading = false;
              };
  }

}
