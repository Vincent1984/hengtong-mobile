import { Component } from '@angular/core';

//import { HomePage } from '../home/index';
import { MuseumHomePage } from '../museum-home/museum-home';
import { ColumnAPage } from '../column/column-a';

import { ColumnModel } from '../../models/column-model';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab_00: any = MuseumHomePage;
  tab_01: any = ColumnAPage;
  tab_02: any = ColumnAPage;
  tab_03: any = ColumnAPage;
  tab_04: any = ColumnAPage;
  tab_05: any = ColumnAPage;

  columnParams: Array<ColumnModel>;

  constructor() {

    this.columnParams = ColumnModel.build();

  }
}
