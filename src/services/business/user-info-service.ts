import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class UserInfoService {

  apiUrl: string;

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://218.61.0.14:8080/web/users/userLogin';
  }

  login(userInfo) {
    return this.resourceService.doGet(this.apiUrl, userInfo);
  }

}