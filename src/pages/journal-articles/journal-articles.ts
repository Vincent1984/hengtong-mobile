import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-intangible-journal-articles',
  templateUrl: 'journal-articles.html'
})
export class JournalArticlesPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.presentLoading();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

}
