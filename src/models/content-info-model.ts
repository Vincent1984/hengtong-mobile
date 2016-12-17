import {Constants} from "../services/constants/constants";
export class ContentInfoModel {

  id: number;
  title: string;
  subTitle: string;
  summary: string;
  addDate: string;
  imgName: string;
  content: string;
  favorite: number;
  typeId: number;

  constructor() {
  }

  public filterImaName() {
    if (this.imgName) {
      return Constants.IMG_URL + this.imgName;
    } else {
      return 'assets/images/culture.jpg';
    }
  }

  public static getNoRecordInfo () {
    var noRecordInfo = new ContentInfoModel();
    noRecordInfo.title = "暂时没有获取到数据";
    noRecordInfo.subTitle = "请稍后重试";
    var date = new Date();
    noRecordInfo.addDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    noRecordInfo.content = "没有获取到数据， 请稍后重试";
    return noRecordInfo;

  }

}

