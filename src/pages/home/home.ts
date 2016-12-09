import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { ResourceService } from "../../services/basic/resource-service";
import { ColumnInfoService } from "../../services/business/column-info-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ColumnInfoService,ResourceService]
})
export class HomePage {

  constructor(public navCtrl: NavController, private columnInfoService: ColumnInfoService) {
    // this.columnInfoService.
  }
  legacy: string = "puppies";

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager: true
  };
  @ViewChild('mySlider') slider: Slides;

  goToSlide() {
    this.slider.slideTo(2, 500);
  }

}
