export class ColumnModel {
  columnType: string;
  columnId: string;
  columnKey: string;
  columnName: string;
  subColumns: Array<ColumnModel>;

  constructor(public _columnType: string, public _columnId: string, _columnName: string, _subColumns: Array<ColumnModel>) {
    this.columnType = _columnType;
    this.columnId= _columnId;
    this.columnName = _columnName;
    this.subColumns = _subColumns;
  }

  public static build() {
    let sub_00_00 = new ColumnModel('FYWH', '120', '非遗动态', null);
    let sub_00_01 = new ColumnModel('FYWH', '121', '非遗名录', null);
    let sub_00_02 = new ColumnModel('FYWH', '122', '非遗传承', null);
    let column_01 = new ColumnModel('FYWH', '12', '非遗文化', [sub_00_00, sub_00_01, sub_00_02]);

    let column_02 = new ColumnModel('WHJT', '22', '文化讲堂', null);

    let column_03 = new ColumnModel('ZTHD', '23', '专题活动', null);

    let column_04 = new ColumnModel('QT', '', '其他', null);

    let column_05 = new ColumnModel('QT', '', '我的艺术馆', null);

    return [column_01, column_02, column_03, column_04, column_05];
  }

}