import { Injectable } from '@angular/core';

import { BusinessService } from '../basic/business-service';
import { ResourceService } from '../basic/resource-service';

import { ContentInfoModel } from '../../models/content-info-model';
import {Constants} from "../constants/constants";

@Injectable()
export class ContentInfoService extends BusinessService<ContentInfoModel> {

  listUrl: string;
  detailUrl: string;
  contentInfo: ContentInfoModel;

  constructor(private resourceService: ResourceService) {
    super();
    this.listUrl = Constants.LIST_URL;
    this.detailUrl = Constants.DETAIL_URL;
  }

  /**
   * 置顶查询
   */
  findTops(columnId, count, startIndex?) {
    return this.resourceService.doGet(this.listUrl + '/' + columnId + '/' + count + '/' + (startIndex || 1), { 'isImag': 1 }).then(data => {
      let contentInfos = new Array<ContentInfoModel>();
      if (data && data.result) {
        data.result.forEach(object => {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, object);
          contentInfos.push(contentInfo);
        });
      }else {
        //do nothing, don't need to show to user
        contentInfos.push(ContentInfoModel.getNoRecordInfo());
      }
      return contentInfos;
    });
  }

  /**
   * 栏目页分页查询
   */
  findPaging(columnId) {
    let pagingModel = this.getPagingModel(columnId);
    return this.resourceService.doGet(this.listUrl + '/' + columnId + '/' + pagingModel.reqCount + '/' + pagingModel.startIndex, { 'isImag': 0 }).then(data => {
      let contentInfos = new Array<ContentInfoModel>();
      if (data && data.result) {
        data.result.forEach(object => {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, object);
          contentInfos.push(contentInfo);
        });
      }else {
        //do nothing, don't need to show to user
        contentInfos.push(ContentInfoModel.getNoRecordInfo());
      }
      return pagingModel.refresh(data?data.dataCounts:1, contentInfos);
    });
  }

  getDetail(contentId) {
    return this.resourceService.doGet(this.detailUrl + '/' + contentId, null).then(data => {
      let contentInfo: ContentInfoModel;
      if (data&&data!=null && data.result) {
        if (data.result && data.result!=null) {
          contentInfo = data.result[0];
        }
      } else {
        //do nothing, don't need to show to user
        contentInfo = ContentInfoModel.getNoRecordInfo();
      }
      return contentInfo;

    });
  }

}
