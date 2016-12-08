import { NavTabModel } from './nav-tab-model';

export class ColumnInfoModel {

  constructor(public columnType: ColumnType, public columnId: string, public columnName: string, public navTabs: Array<NavTabModel>) {
  }

  public static buildSY() {
    return  new ColumnInfoModel(ColumnType.INDEX, '', '首页', null);
  }

  public static buildFY() {
    let subTab_00 = new NavTabModel('120', '非遗动态');
    let subTab_01 = new NavTabModel('121', '非遗名录');
    let subTab_02 = new NavTabModel('122', '非遗传承');

    return new ColumnInfoModel(ColumnType.DEFAULT, '12', '非遗文化', [subTab_00, subTab_01, subTab_02]);
  }

  public static buildJT() {
    return new ColumnInfoModel(ColumnType.DEFAULT, '22', '文化讲堂', null);
  }

  public static buildZT() {
    return  new ColumnInfoModel(ColumnType.DEFAULT, '23', '专题活动', null);
  }

  public static buildQT() {
    return  new ColumnInfoModel(ColumnType.DEFAULT, '', '其他', null);
  }

  public static buildWD() {
    return  new ColumnInfoModel(ColumnType.MY, '', '我的艺术馆', null);
  }

}

export enum ColumnType {DEFAULT, INDEX, MY};
