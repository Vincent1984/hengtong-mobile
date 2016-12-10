import { Component } from '@angular/core';
import {LoginPage} from "../login/login";
import {NavController} from 'ionic-angular';
import { UserInfoService } from '../../services/business/user-info-service';
import { StorageService } from '../../services/basic/storage-service';
import {MyArtTabsPage} from "../myart-tabs/myart-tabs";
import {ResourceService} from "../../services/basic/resource-service";
import { UserInfoModel } from "../../models/user-info-model";

@Component({
  selector: 'regist-page',
  templateUrl: 'regist.html',
  providers: [ResourceService, UserInfoService,StorageService]
})
export class RegistPage {

  userInfoModel: UserInfoModel;

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService, private storageService: StorageService) {
    this.userInfoModel = new UserInfoModel();
  }

  regist() {
    if (this.userInfoModel.userName&&this.userInfoModel.passWord&&this.userInfoModel.confirmPassWord&&this.userInfoModel.telNum) {
      if (this.userInfoModel.passWord != this.userInfoModel.confirmPassWord){
        alert("密码不一致");
      }else{
        let promise = this.userInfoService.regist(this.userInfoModel);
        if (promise) {
          promise.then(data => {
            if (0 == data.errorCode) {
              this.storageService.write("hengtong-id",data.result[0].userId);
              this.navCtrl.push(MyArtTabsPage);
            }else{
              alert(data.errorMsg);
            }
          });
        }
      }
    }else {
      alert("请输入必填项");
    }
  }

  openLogin() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(LoginPage);
  }
}
