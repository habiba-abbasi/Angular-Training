import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactCreateComponent } from './views/contact-create/contact-create.component';
import { Utility } from './utility/utility';

import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyToasterService } from './utility/MyToasterService';
import { LoginComponent } from './views/login/login.component';
import { StudentComponent } from './views/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [ Utility,
  MyToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
