import { NavTabModel } from './nav-tab-model';

export class ColumnInfoModel {

  constructor(public columnType: ColumnType, public columnId: string, public columnName: string, public navTabs: Array<NavTabModel>) {
  }

  public static buildSY() {
    return  new ColumnInfoModel(ColumnType.INDEX, '', '首页', null);
  }

  public static buildFY() {
    let subTab_00 = new NavTabModel('8', '非遗动态');
    let subTab_01 = new NavTabModel('48', '非遗名录');
    let subTab_02 = new NavTabModel('47', '非遗规章');

    return new ColumnInfoModel(ColumnType.DEFAULT, '3000', '非遗文化', [subTab_00, subTab_01, subTab_02]);
  }

  public static buildQK() {
    let subTab_00 = new NavTabModel('32', '文苑集萃');
    return new ColumnInfoModel(ColumnType.DEFAULT, '4000', '群文期刊', null);
  }

  public static buildZT() {
    let subTab_00 = new NavTabModel('43', '群星讲堂');
    let subTab_01 = new NavTabModel('44', '群星剧场');
    let subTab_02 = new NavTabModel('51', '群星展厅');
    let subTab_03 = new NavTabModel('50', '群星舞台');
    let subTab_04 = new NavTabModel('52', '志愿者巡演');
    return  new ColumnInfoModel(ColumnType.DEFAULT, '2000', '专题活动', null);
  }

  public static buildWD() {
    return  new ColumnInfoModel(ColumnType.MY, '', '我的艺术馆', null);
  }

}

export enum ColumnType {DEFAULT, INDEX, MY};
