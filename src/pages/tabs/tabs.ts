import { Component } from '@angular/core';

//import { HomePage } from '../home/index';
import { MuseumHomePage } from '../museum-home/museum-home';
import { ColumnAPage } from '../column/column-a';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	// this tells the tabs component which Pages
	// should be each tab's root Page

	tab00: any = MuseumHomePage;
	tab01: any = ColumnAPage;
	tab02: any = ColumnAPage;
	tab03: any = ColumnAPage;
	tab04: any = ColumnAPage;
	tab05: any = ColumnAPage;

	constructor() {
	}
}
