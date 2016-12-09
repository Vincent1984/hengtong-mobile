import { NavTabModel } from './nav-tab-model';

export class ColumnInfoModel {

  public static FYDT_ID = '8';  //非遗动态
  public static FYML_ID = '48';  //非遗名录
  public static FYGZ_ID = '47';  //非遗规章
  public static TJNR_ID = '10';  //推荐内容
  public static WYJC_ID = '32';  //文苑集萃
  public static QXJT_ID = '43';  //群星讲堂
  public static QXJC_ID = '44';  //群星剧场
  public static QXZT_ID = '51';  //群星展厅
  public static QXWT_ID = '50';  //群星舞台
  public static XYZXY_ID = '52';  //志愿者巡演

  constructor(public columnType: ColumnType, public columnId: string, public columnName: string, public navTabs: Array<NavTabModel>) {
  }

  public static buildSY() {
    return  new ColumnInfoModel(ColumnType.INDEX, '', '首页', null);
  }

  public static buildFY() {
    let subTab_00 = new NavTabModel(ColumnInfoModel.FYDT_ID, '非遗动态');
    let subTab_01 = new NavTabModel(ColumnInfoModel.FYML_ID, '非遗名录');
    let subTab_02 = new NavTabModel(ColumnInfoModel.FYGZ_ID, '非遗规章');

    return new ColumnInfoModel(ColumnType.DEFAULT, '3000', '非遗文化', [subTab_00, subTab_01, subTab_02]);
  }

  public static buildQK() {
    let subTab_00 = new NavTabModel(ColumnInfoModel.WYJC_ID, '文苑集萃');
    return new ColumnInfoModel(ColumnType.DEFAULT, '4000', '群文期刊', [subTab_00]);
  }

  public static buildZT() {
    let subTab_00 = new NavTabModel(ColumnInfoModel.QXJT_ID, '群星讲堂');
    let subTab_01 = new NavTabModel(ColumnInfoModel.QXJC_ID, '群星剧场');
    let subTab_02 = new NavTabModel(ColumnInfoModel.QXZT_ID, '群星展厅');
    let subTab_03 = new NavTabModel(ColumnInfoModel.QXWT_ID, '群星舞台');
    let subTab_04 = new NavTabModel(ColumnInfoModel.XYZXY_ID, '志愿者巡演');
    return  new ColumnInfoModel(ColumnType.DEFAULT, '2000', '专题活动', [subTab_00,subTab_01,subTab_02,subTab_03,subTab_04]);
  }

  public static buildWD() {
    return  new ColumnInfoModel(ColumnType.MY, '', '我的艺术馆', null);
  }

}

export enum ColumnType {DEFAULT, INDEX, MY};
