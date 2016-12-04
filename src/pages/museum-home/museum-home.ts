import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-museum-home',
  templateUrl: 'museum-home.html'
})
export class MuseumHomePage {

  constructor(public navCtrl: NavController) {

  }
  legacy: string = "puppies";

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager:true
  };
  @ViewChild('mySlider') slider: Slides;

  goToSlide() {
    this.slider.slideTo(2, 500);
  }
}
