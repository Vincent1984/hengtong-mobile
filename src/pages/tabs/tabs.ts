import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { ColumnWithTabPage } from '../column/column-with-tab';
import { ColumnWithMorePage } from '../column/column-with-more';

import { ColumnModel } from '../../models/column-model';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab_00: any = HomePage;
  tab_01: any = ColumnWithTabPage;
  tab_02: any = ColumnWithTabPage;
  tab_03: any = ColumnWithTabPage;
  tab_04: any = ColumnWithTabPage;
  tab_05: any = ColumnWithMorePage;

  columnParams: Array<ColumnModel>;

  constructor() {

    this.columnParams = ColumnModel.build();

  }
}
