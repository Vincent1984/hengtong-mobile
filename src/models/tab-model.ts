import { ColumnInfoModel } from './column-info-model';

import { MuseumHomePage } from '../pages/museum-home/museum-home-page';
import { ContentListPage } from '../pages/content-list/content-list-page';
import { MyartTabsPage } from '../pages/myart-tabs/myart-tabs-page';
import { MessageListPage } from '../pages/message-list/message-list-page';
import { MessagePushPage } from '../pages/message-push/message-push-page';
import { VersionUpdatePage } from '../pages/version-update/version-update-page';

export class TabModel {

  constructor(public tabPage: any, public tabId: string, public tabName: string, public tabIcon: string, public columnInfoModel: ColumnInfoModel) {
  }

  public static buildTabs() {
    let tab_01 = new TabModel(MuseumHomePage, '1', '首页', 'tab01', ColumnInfoModel.buildSY());
    let tab_02 = new TabModel(ContentListPage, '2', '专题活动', 'tab02', ColumnInfoModel.buildZT());
    let tab_03 = new TabModel(ContentListPage, '3', '非遗文化', 'tab03', ColumnInfoModel.buildFY());
    let tab_04 = new TabModel(ContentListPage, '4', '群文期刊', 'tab04', ColumnInfoModel.buildQK());
    let tab_05 = new TabModel(MyartTabsPage, '5', '我的艺术馆', 'tab05', ColumnInfoModel.buildWD());

    return [tab_01, tab_02, tab_03, tab_04, tab_05];
  }

  public static buildMyArtTabs() {
    let tab_00 = new TabModel(MessageListPage, '0', '消息推送', 'tab07', ColumnInfoModel.buildWD());
    let tab_01 = new TabModel(MessagePushPage, '1', '用户留言', 'tab08', ColumnInfoModel.buildWD());
    let tab_02 = new TabModel(VersionUpdatePage, '2', '版本更新', 'tab09', ColumnInfoModel.buildWD());

    return [tab_00, tab_01, tab_02];
  }

}
