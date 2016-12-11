export class ColumnInfoModel {

  public static FYDT_ID = '8';   //非遗动态
  public static FYML_ID = '48';  //非遗名录
  public static FYGZ_ID = '47';  //非遗规章
  public static WYJC_ID = '32';  //文苑集萃
  public static QXJT_ID = '43';  //群星讲堂
  public static QXJC_ID = '44';  //群星剧场
  public static QXZT_ID = '51';  //群星展厅
  public static QXWT_ID = '50';  //群星舞台
  public static ZYZXY_ID = '52'; //志愿者巡演
  public static QWZX_ID = '12';  //群文资讯

  constructor(public columnType: ColumnType, public columnId: string, public columnName: string, public selectedSubId: string, public subColumns: Array<ColumnInfoModel>) {
  }

  public static buildSY() {
    return new ColumnInfoModel(ColumnType.INDEX, null, '首页', null, null);
  }

  public static buildFY() {
    let subTab_00 = new ColumnInfoModel(null, ColumnInfoModel.FYDT_ID, '非遗动态', null, null);
    let subTab_01 = new ColumnInfoModel(null, ColumnInfoModel.FYML_ID, '非遗名录', null, null);
    let subTab_02 = new ColumnInfoModel(null, ColumnInfoModel.FYGZ_ID, '非遗规章', null, null);

    return new ColumnInfoModel(ColumnType.DEFAULT, '3000', '非遗文化', ColumnInfoModel.FYDT_ID, [subTab_00, subTab_01, subTab_02]);
  }

  public static buildQK() {
    let subTab_00 = new ColumnInfoModel(null, ColumnInfoModel.WYJC_ID, '文苑集萃', null, null);
    return new ColumnInfoModel(ColumnType.DEFAULT, '4000', '群文期刊', ColumnInfoModel.WYJC_ID, [subTab_00]);
  }

  public static buildZT() {
    let subTab_00 = new ColumnInfoModel(null, ColumnInfoModel.QXJT_ID, '群星讲堂', null, null);
    let subTab_01 = new ColumnInfoModel(null, ColumnInfoModel.QXJC_ID, '群星剧场', null, null);
    let subTab_02 = new ColumnInfoModel(null, ColumnInfoModel.QXZT_ID, '群星展厅', null, null);
    let subTab_03 = new ColumnInfoModel(null, ColumnInfoModel.QXWT_ID, '群星舞台', null, null);
    let subTab_04 = new ColumnInfoModel(null, ColumnInfoModel.ZYZXY_ID, '志愿者巡演', null, null);
    return new ColumnInfoModel(ColumnType.DEFAULT, '2000', '专题活动', ColumnInfoModel.QXJT_ID, [subTab_00, subTab_01, subTab_02, subTab_03, subTab_04]);
  }

  public static buildWD() {
    return new ColumnInfoModel(ColumnType.MY, null, '我的艺术馆', null, null);
  }

}

export enum ColumnType { DEFAULT, INDEX, MY };
