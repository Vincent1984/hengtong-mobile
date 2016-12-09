import { Component } from '@angular/core';
//import { Validators, FormBuilder } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { RegistPage } from '../regist/regist';
import { TabsPage } from '../tabs/tabs';

import { UserInfoModel } from "../../models/user-info-model";
import { ResourceService } from "../../services/basic/resource-service";
import { UserInfoService } from '../../services/business/user-info-service';
import { StorageService } from '../../services/basic/storage-service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html',
  providers: [ResourceService, UserInfoService,StorageService]
})
export class LoginPage {

  userInfoModel: UserInfoModel;

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService, private storageService: StorageService) {
    this.userInfoModel = new UserInfoModel();
  }

  login() {
    let promise = this.userInfoService.login(this.userInfoModel);
    if (promise) {
      promise.then(data => {
        if (0 == data.errorCode) {
          this.storageService.write("hengtong-id",data.result[0]);
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
