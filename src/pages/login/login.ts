import { Component } from '@angular/core';
//import { Validators, FormBuilder } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { RegistPage } from '../regist/regist';
import { TabsPage } from '../tabs/tabs';

import { ResourceService } from "../../services/basic/resource-service";
import { UserInfoService } from '../../services/business/user-info-service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html',
  providers: [ResourceService, UserInfoService]
})
export class LoginPage {

  userInfo = {};

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService) {
  }

  login() {
    let promise = this.userInfoService.login(this.userInfo);
    if (promise) {
      promise.then(json => {
        if (0 == json.errorCode) {
          this.navCtrl.push(TabsPage);
        }
      });
    }
  }

  openRegist() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(RegistPage);
  }
}
