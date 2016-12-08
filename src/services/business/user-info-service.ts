import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class UserInfoService {

  apiUrl: string;

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://192.168.2.7:8080/login/loginMUserAjAX';
  }

  login(userInfo) {
    return this.resourceService.doGet(this.apiUrl, userInfo);
  }

}