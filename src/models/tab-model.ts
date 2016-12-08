import { ColumnInfoModel } from './column-info-model';

import { HomePage } from '../pages/home/home';
import { ColumnWithTabPage } from '../pages/column/column-with-tab';
import { ColumnWithMorePage } from '../pages/column/column-with-more';
import { SubTabsPage } from '../pages/tabs/sub-tabs';

export class TabModel {

  constructor(public tabPage: any, public tabId: string, public tabName: string, public tabIcon: string, public columnInfoModel: ColumnInfoModel) {
  }

  public static buildTabs() {
    let tab_00 = new TabModel(HomePage, '1', '首页', 'tab01', ColumnInfoModel.buildSY());
    let tab_01 = new TabModel(ColumnWithTabPage, '1', '非遗', 'tab01', ColumnInfoModel.buildFY());
    let tab_02 = new TabModel(ColumnWithTabPage, '2', '讲堂', 'tab02', ColumnInfoModel.buildJT());
    let tab_03 = new TabModel(ColumnWithTabPage, '3', '专题', 'tab03', ColumnInfoModel.buildZT());
    let tab_04 = new TabModel(ColumnWithTabPage, '4', '其他', 'tab04', ColumnInfoModel.buildQT());
    let tab_05 = new TabModel(SubTabsPage, '5', '我的', 'tab05', ColumnInfoModel.buildWD());

    return [tab_00, tab_01, tab_02, tab_03, tab_04, tab_05];
  }

  public static buildSubTabs() {
    let tab_00 = new TabModel(ColumnWithMorePage, '0', '联系我们', 'sub-tab00', ColumnInfoModel.buildWD());
    let tab_01 = new TabModel(ColumnWithMorePage, '1', '用户留言', 'sub-tab01', ColumnInfoModel.buildWD());
    let tab_02 = new TabModel(ColumnWithMorePage, '2', '版本更新', 'sub-tab02', ColumnInfoModel.buildWD());

    return [tab_00, tab_01, tab_02];
  }

}