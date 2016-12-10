import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {DynamicComponentLoader, Injector, ElementRef, OnInit} from "angular2/core";

@Component({
  selector: 'page-push-detail',
  templateUrl: 'push-detail.html'
})
export class PushDetailPage{
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
