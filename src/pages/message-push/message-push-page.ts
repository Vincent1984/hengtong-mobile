import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ResourceService } from '../../services/basic/resource-service';
import { MessageInfoService } from '../../services/business/message-info-service';
import { UserInfoService } from '../../services/business/user-info-service';

import { MessageInfoModel} from '../../models/message-info-model';

@Component({
  selector: 'message-push-page',
  templateUrl: 'message-push-page.html',
  providers: [ResourceService, MessageInfoService, UserInfoService]
})
export class MessagePushPage {
  messageInfoModel: MessageInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private messageInfoService: MessageInfoService, private userInfoService: UserInfoService) {
    this.messageInfoModel = new MessageInfoModel();
    this.messageInfoModel.userId = JSON.stringify(userInfoService.getUserId());
  }

  send() {
    if (this.messageInfoModel.feedbackContent) {
      let promise = this.messageInfoService.push(this.messageInfoModel);
      this.messageInfoService.push(this.messageInfoModel).then(data => {
        if (0 == data.errorCode) {
            alert("消息发送成功");
        } else {
            alert("消息发送失败");
        }
      });
    } else {
      alert("请输入留言信息");
    }
  }

}
