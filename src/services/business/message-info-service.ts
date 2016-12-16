import { Injectable } from '@angular/core';

import { BusinessService } from '../basic/business-service';
import { ResourceService } from '../basic/resource-service';

import { MessageInfoModel } from '../../models/message-info-model';
import {Constants} from "../constants/constants";

@Injectable()
export class MessageInfoService extends BusinessService<MessageInfoModel> {

  pushUrl: string;
  pullUrl: string;

  constructor(private resourceService: ResourceService) {
    super();
    this.pushUrl = Constants.PUSH_URL;
    this.pullUrl = Constants.PULL_URL;
  }

  push(messageInfo) {
    return this.resourceService.doPost(this.pushUrl, null, messageInfo);
  }

  pull(userId) {
    return this.resourceService.doGet(this.pullUrl, { 'userId': userId }).then(data => {
      if (data&&data!=null&&data.result) {
        let messageInfos = new Array<MessageInfoModel>();
        data.result.forEach(object => {
          let messageInfo = new MessageInfoModel();
          Object.assign(messageInfo, object);
          messageInfos.push(messageInfo);
        });
        return messageInfos;
      }
    });
  }

}
