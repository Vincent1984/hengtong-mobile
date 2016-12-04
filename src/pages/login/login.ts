import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  todo = {};

  constructor(private formBuilder: FormBuilder) {
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
}
