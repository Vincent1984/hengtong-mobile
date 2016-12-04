import { Component } from '@angular/core';

//import { HomePage } from '../home/index';
import { MuseumHomePage } from '../museum-home/museum-home';
import { ColumnWithTabPage } from '../column/column-with-tab';

import { ColumnModel } from '../../models/column-model';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab_00: any = MuseumHomePage;
  tab_01: any = ColumnWithTabPage;
  tab_02: any = ColumnWithTabPage;
  tab_03: any = ColumnWithTabPage;
  tab_04: any = ColumnWithTabPage;
  tab_05: any = ColumnWithTabPage;

  columnParams: Array<ColumnModel>;

  constructor() {

    this.columnParams = ColumnModel.build();

  }
}
