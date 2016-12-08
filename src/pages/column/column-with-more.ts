import { Component } from '@angular/core';

import { NavController, NavParams, } from 'ionic-angular';

import {ColumnInfoModel} from '../../models/column-info-model';

@Component({
  selector: 'column-with-more',
  templateUrl: 'column-with-more.html'
})
export class ColumnWithMorePage {

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  columnInfoModel: ColumnInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.columnInfoModel = navParams.data;

    this.items = [];
    for (var i = 0; i < 30; i++) {
      this.items.push({ title: 'test', note: 'test', icon: 'http://d.ifengimg.com/q75/img1.ugc.ifeng.com/newugc/20161124/image/17/201_0gZKL05e08c_watermark0gZK2bN007O.jpg' });
    }
  }

  doRefresh(refresher) {
    refresher.complete();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      for (var i = 0; i < 30; i++) {
        this.items.push(this.items[i]);
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
