export class MessageInfoModel {

  id: number;
  userId: string;
  feedbackPerson: string;
  feedbackPersonId: number;
  addTime: string;
  inforCounts: number;
  feedbackType: string;
  feedbackContent: string;

  constructor() {
  }

  public static getNoRecordInfo () {
    var noRecordInfo = new MessageInfoModel();
    var date = new Date();
    noRecordInfo.addTime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    noRecordInfo.inforCounts = 1;
    noRecordInfo.feedbackPerson = 'admin';
    return noRecordInfo;

  }

}
