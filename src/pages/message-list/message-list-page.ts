import { Component } from '@angular/core';

import { NavController, NavParams, } from 'ionic-angular';

import { MuseumHomePage } from '../museum-home/museum-home-page';
import { MessageInfoPage } from '../message-info/message-info-page';

import { ResourceService } from '../../services/basic/resource-service';
import { MessageInfoService } from '../../services/business/message-info-service';
import { UserInfoService } from '../../services/business/user-info-service';

import { MessageInfoModel } from '../../models/message-info-model';


@Component({
  selector: 'message-list-page',
  templateUrl: 'message-list-page.html',
  providers: [ResourceService, MessageInfoService, UserInfoService]
})
export class MessageListPage {

  selectedItem: any;

  userId: string;

  //消息列表
  messageInfos: Array<MessageInfoModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private messageInfoService: MessageInfoService, private userInfoService: UserInfoService) {
    this.homePage = MuseumHomePage;
    this.userId = JSON.stringify(this.userInfoService.getUserId());
    this.loadMessages();
  }

  loadMessages() {
    if (this.userId) {
      return this.messageInfoService.pull(this.userId).then(messageInfos => {
        this.messageInfos = messageInfos;
      });
    }
  }

  /**
   * 下滑刷新数据
   */
  doRefresh(refresher) {
    console.log('Async operation has ended');
    if (this.userId) {
      this.messageInfoService.restoration(this.userId);
      this.loadMessages().then(() => {
        refresher.complete();
      });
    }
  }

  /**
   * 上滑加载数据
   */
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    if (this.userId) {
      this.loadMessages().then(() => {
        console.log('Async operation has ended');
        infiniteScroll.complete();
      });
    }
  }

  goMessageInfoPage(messageInfo) {
    this.navCtrl.push(MessageInfoPage, {
      messageInfo: messageInfo
    });
  }

}
