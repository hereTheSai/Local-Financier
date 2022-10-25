import { Component, OnInit  ,OnDestroy , ViewChild } from '@angular/core';
import { FormControl, FormGroup,NgForm,ReactiveFormsModule, Validators } from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('f') loginForm:NgForm;
  DefaultQn = "pet";
  QuestionAns = '';
  genders = ['male', 'female'];
  OnSubmit() {
    console.log(this.loginForm);
  }
  SuggestUserName(){
    // this.loginForm.setValue({
    //   userData: {
    //     username : 'Sai',
    //     email : ''
    //   },
    //   secret : 'pet', 
    //   gender : 'male',
    //   answer : 'check'

    // });
    this.loginForm.form.patchValue({
      userData: {
            username : 'Sai'
          }
    })
  }
}
