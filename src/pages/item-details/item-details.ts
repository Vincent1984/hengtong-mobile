import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {DynamicComponentLoader, Injector, ElementRef, OnInit} from "angular2/core";

@Component({
  selector: 'item-details-page',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage{
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.selectedItem.content="<h1>write content</h1>";
  }
}
