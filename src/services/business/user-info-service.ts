import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class UserInfoService {

  apiLogin: string;
  apiRegist: string;

  constructor(private resourceService: ResourceService) {
    this.apiLogin = 'http://218.61.0.14:8080/dlqzysgweb/web/users/userLogin';
    this.apiRegist = 'http://218.61.0.14:8080/dlqzysgweb/web/users/register';
  }

  login(userInfo) {
    return this.resourceService.doGet(this.apiLogin, userInfo);
  }

  regist(userInfo) {
    return this.resourceService.doPost(this.apiRegist, null, userInfo);
  }

}
