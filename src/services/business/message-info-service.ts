import { Injectable } from '@angular/core';

import { BusinessService } from '../basic/business-service';
import { ResourceService } from '../basic/resource-service';

import { MessageInfoModel } from '../../models/message-info-model';

@Injectable()
export class MessageInfoService extends BusinessService<MessageInfoModel> {

  pushUrl: string;
  pullUrl: string;

  constructor(private resourceService: ResourceService) {
    super();
    this.pushUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/users/feedBack';
    this.pullUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/users/myFeedBack';
  }

  push(messageInfo) {
    return this.resourceService.doPost(this.pushUrl, null, messageInfo);
  }

  pull(userId) {
    return this.resourceService.doGet(this.pullUrl, { 'userId': userId }).then(data => {
      if (data.result) {
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
