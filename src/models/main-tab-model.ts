export class MainTabModel {
  tabId: string;
  tabName: string;

  constructor(public _tabId: string, public _tabName: string) {
    this.tabId = _tabId;
    this.tabName = _tabName;
  }

  public static build() {
    let sub_00_00 = new ColumnModel('FYWH', '120', '非遗动态', null, null);
    let sub_00_01 = new ColumnModel('FYWH', '121', '非遗名录', null, null);
    let sub_00_02 = new ColumnModel('FYWH', '122', '非遗传承', null, null);
    let column_01 = new ColumnModel('FYWH', '12', '非遗文化', null, [sub_00_00, sub_00_01, sub_00_02]);

    let column_02 = new ColumnModel('WHJT', '22', '文化讲堂', null, null);

    let column_03 = new ColumnModel('ZTHD', '23', '专题活动', null, null);

    let column_04 = new ColumnModel('QT', '', '其他', null, null);

    let sub_05_00 = new ColumnModel('WDYSG', '', '联系我们', '消息推送', null);
    let sub_05_01 = new ColumnModel('WDYSG', '', '用户留言', null, null);
    let sub_05_02 = new ColumnModel('WDYSG', '', '版本更新', null, null);
    let column_05 = new ColumnModel('WDYSG', '', '我的艺术馆', null, [sub_05_00, sub_05_01, sub_05_02]);

    return [column_01, column_02, column_03, column_04, column_05];
  }

}