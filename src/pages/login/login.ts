import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { RegistPage } from '../regist/regist';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  todo = {};

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.ionViewLoaded();
  }
  ionViewLoaded() {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      password: [''],
    });
  }
  loginForm(){
    console.log(this.todo.toString());
    this.navCtrl.push(TabsPage);
  }
  openRegist(){
    // navigate to the new page if it is not the current page
    this.navCtrl.push(RegistPage);
  }
}
