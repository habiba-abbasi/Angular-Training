import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactCreateComponent } from './views/contact-create/contact-create.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { LoginComponent } from './views/login/login.component';
import { StudentComponent } from './views/student/student.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {path:  "", pathMatch: "full", redirectTo:  "login"},
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},
  {path: 'login',component: LoginComponent},
  {path: 'home/student/:id',component: StudentComponent},
  {path: 'register',component: RegisterComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
