import { Component, OnInit ,ViewChild } from '@angular/core';
import { LoginDetailsService } from './login-details.service';
import { FormBuilder, FormControl, FormGroup, FormsModule , ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css'],
  providers: [LoginDetailsService]
})
export class LoginDetailsComponent implements OnInit {
  //@ViewChild('loginDetails') loginForm:NgForm;
  // userid : string;
  // password : string;
  user : any;
  form : FormGroup;

  observable = new Observable(this.count); //observable takes observer as a parameter..

  constructor(private loginDetailsService: LoginDetailsService , private route : ActivatedRoute
    , private router: Router ,private fb : FormBuilder) { }

  ngOnInit(): void {
    // this.observable.subscribe(
    //   val => {console.log(val)},
    //   err => {console.log(err)},
    //   () => {'Completed'}
    // );
    this.form = this.fb.group({
      "firstName":["", Validators.required],
      "password": ["", Validators.required]
  });
  }
  count(observer) {
    console.log("Observable starts")
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
    observer.next('5')
  }
  LoginUser(user) {
    var val = this.loginDetailsService.AuthenticateUser(user.userId , user.password);
    console.log(user);
    if(val) {
      this.router.navigate(['home'])
    } else {
      alert('Login Failed');
    }
  }
  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form);
  }

}
