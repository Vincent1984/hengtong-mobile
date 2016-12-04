import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'column-b',
	templateUrl: 'column-b.html'
})
export class ColumnBPage {

	selectedItem: any;
	icons: string[];
	items: Array<{ title: string, note: string, icon: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.items = [{ title: '', note: '', icon: '' }];
	}

	doRefresh = function(refresher) {
		refresher.complete();
	}

}
