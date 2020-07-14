import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyToasterService } from 'src/app/utility/MyToasterService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(       private formBuilder: FormBuilder,
                     private route: ActivatedRoute,
                     private router: Router,
                     public toastr: MyToasterService) {

         }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }
  onSubmit(){
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }


    if(this.loginForm.valid){
        if(this.f.username.value === 'habiba' && this.f.password.value === '1234'){
          this.loading = true;
          this.router.navigate(['/home']);

        }
        else{
          this.toastr.showToast('Error', 'Invalid username or password', 'Failed');
        }
    }
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
}
  }
// }
