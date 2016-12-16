import { Injectable } from '@angular/core';

import { ResourceService } from '../basic/resource-service';
import { StorageService } from '../basic/storage-service';
import {Constants} from "../constants/constants";

@Injectable()
export class UserInfoService {

  apiLogin: string;
  apiRegist: string;

  constructor(private resourceService: ResourceService, private storageService: StorageService) {
    this.apiLogin = Constants.LOGIN_URL;
    this.apiRegist = Constants.REGISTER_URL;
  }

  login(userInfo) {
    return this.resourceService.doGet(this.apiLogin, userInfo);
  }

  regist(userInfo) {
    return this.resourceService.doPost(this.apiRegist, null, userInfo);
  }

  getUserId() {
    let userId = this.storageService.read('hengtong-id');
    if (userId && null != userId && {} != userId) {
      return userId;
    }
    return;
  }

}
