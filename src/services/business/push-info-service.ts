import { Injectable } from '@angular/core';
import {  } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

import { ContentInfoModel } from "../../models/content-info-model";
import { PagingModel } from "../../models/paging-model";
import {PushInfoModel} from "../../models/push-info-model";

@Injectable()
export class PushInfoService {

  apiUrl: string;
  userQuery: {};

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/users/myFeedBack';
    this.userQuery={'isImag':1};
  }

  list(userId) {
    this.userQuery={'userId':userId};
    return this.resourceService.doGet(this.apiUrl, this.userQuery).then(data => {
      if (data.result) {
        let pushInfos: Array<PushInfoModel>;
        pushInfos = [];
        for (let i in data.result) {
          let pushInfo = new PushInfoModel();
          Object.assign(pushInfo, data.result[i]);
          pushInfos.push(pushInfo);
        }
        return pushInfos;
      }
    });
  }


}
