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

}

