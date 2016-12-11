import { Component } from '@angular/core';
//import { Validators, FormBuilder } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserRegistPage } from '../user-regist/user-regist-page';
import { MyartTabsPage } from "../myart-tabs/myart-tabs-page";

import { ResourceService } from '../../services/basic/resource-service';
import { UserInfoService } from '../../services/business/user-info-service';
import { StorageService } from '../../services/basic/storage-service';

import { UserInfoModel } from '../../models/user-info-model';

@Component({
  selector: 'user-login-page',
  templateUrl: 'user-login-page.html',
  providers: [ResourceService, UserInfoService, StorageService]
})
export class UserLoginPage {

  userInfoModel: UserInfoModel;

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService, private storageService: StorageService) {
    this.userInfoModel = new UserInfoModel();
  }

  login() {
    let promise = this.userInfoService.login(this.userInfoModel);
    if (promise) {
      promise.then(data => {
        if (0 == data.errorCode) {
          this.storageService.write('hengtong-id', data.result[0].userId);
          this.navCtrl.push(MyartTabsPage);
        }
      });
    }
  }

  openRegist() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(UserRegistPage);
  }

}
