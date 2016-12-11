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
      return 'http://218.61.0.14:8080/dlqzysgweb/Public/upload/article/' + this.imgName;
    } else {
      return 'assets/images/culture.jpg';
    }
  }

}

