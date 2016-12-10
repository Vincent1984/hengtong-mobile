import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { StorageService } from '../../services/basic/storage-service';
import {ResourceService} from "../../services/basic/resource-service";
import {ColumnInfoModel} from "../../models/column-info-model";
import {MessageModel} from "../../models/message-model";
import {MessageService} from "../../services/business/message-service";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
  providers: [ResourceService, MessageService,StorageService]
})
export class MessagePage {
  messageModel: MessageModel;
  columnInfoModel: ColumnInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private messageService: MessageService, private storageService: StorageService) {
    this.columnInfoModel = navParams.data;
    this.messageModel = new MessageModel();
    this.messageModel.userId = JSON.stringify(storageService.read("hengtong-id"));
  }

  send() {
    if (this.messageModel.feedbackContent) {
      let promise = this.messageService.send(this.messageModel);
      if (promise) {
        promise.then(data => {
          if (0 == data.errorCode) {
            alert("消息发送成功");
          }else{
            alert("消息发送失败");
          }
        });
      }
    }else {
      alert("请输入留言信息");
    }
  }
}
