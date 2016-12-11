import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserLoginPage } from '../user-login/user-login-page';
import { MyartTabsPage } from '../myart-tabs/myart-tabs-page';

import { UserInfoService } from '../../services/business/user-info-service';
import { StorageService } from '../../services/basic/storage-service';
import { ResourceService } from '../../services/basic/resource-service';

import { UserInfoModel } from '../../models/user-info-model';

@Component({
  selector: 'user-regist-page',
  templateUrl: 'user-regist-page.html',
  providers: [ResourceService, UserInfoService, StorageService]
})
export class UserRegistPage {

  userInfoModel: UserInfoModel;

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService, private storageService: StorageService) {
    this.userInfoModel = new UserInfoModel();
  }

  regist() {
    if (this.userInfoModel.userName && this.userInfoModel.passWord && this.userInfoModel.confirmPassWord && this.userInfoModel.telNum) {
      if (this.userInfoModel.passWord != this.userInfoModel.confirmPassWord) {
        alert('密码不一致');
      } else {
        let promise = this.userInfoService.regist(this.userInfoModel);
        if (promise) {
          promise.then(data => {
            if (0 == data.errorCode) {
              this.storageService.write('hengtong-id', data.result[0].userId);
              this.navCtrl.push(MyartTabsPage);
            } else {
              alert(data.errorMsg);
            }
          });
        }
      }
    } else {
      alert('请输入必填项');
    }
  }

  openLogin() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(UserLoginPage);
  }

}
