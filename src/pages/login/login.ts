import { Component} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  todo = {};

  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.ionViewLoaded();
  }
  ionViewLoaded() {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      password: [''],
    });
  }
  loginForm(){
    console.log(this.todo.toString())
  }
  openRegist(){
    // navigate to the new page if it is not the current page
    this.router.navigate(['regist']);
  }
}
