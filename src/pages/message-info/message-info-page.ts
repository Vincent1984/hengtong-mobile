import { Component } from '@angular/core';
import { DynamicComponentLoader, Injector, ElementRef, OnInit } from 'angular2/core';

import { NavController, NavParams } from 'ionic-angular';

import { MessageInfoModel } from "../../models/message-info-model";

@Component({
  selector: 'message-info-page',
  templateUrl: 'message-info-page.html'
})
export class MessageInfoPage {

  messageInfoModel: MessageInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageInfoModel = this.navParams.data.messageInfo;
  }

}
