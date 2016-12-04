import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { Nav } from 'ionic-angular';
import { RegistPage } from '../regist/regist';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild(Nav) nav: Nav;

  registPage: any = RegistPage;

  todo = {};R

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
  openRegist(){
    // navigate to the new page if it is not the current page
    this.nav.setRoot(this.registPage);
  }
}
