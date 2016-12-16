import { Injectable } from '@angular/core';

import { BusinessService } from '../basic/business-service';
import { ResourceService } from '../basic/resource-service';

import { ContentInfoModel } from '../../models/content-info-model';
import {Constants} from "../constants/constants";

@Injectable()
export class ContentInfoService extends BusinessService<ContentInfoModel> {

  listUrl: string;
  detailUrl: string;

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
      if (data.result) {
        let contentInfos = new Array<ContentInfoModel>();
        data.result.forEach(object => {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, object);
          contentInfos.push(contentInfo);
        });
        return contentInfos;
      }
    });
  }

  /**
   * 栏目页分页查询
   */
  findPaging(columnId) {
    let pagingModel = this.getPagingModel(columnId);
    return this.resourceService.doGet(this.listUrl + '/' + columnId + '/' + pagingModel.reqCount + '/' + pagingModel.startIndex, { 'isImag': 0 }).then(data => {
      if (data.result) {
        let contentInfos = new Array<ContentInfoModel>();
        data.result.forEach(object => {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, object);
          contentInfos.push(contentInfo);
        });
        return pagingModel.refresh(data.dataCounts, contentInfos);
      }
    });
  }

  getDetail(contentId) {
    return this.resourceService.doGet(this.detailUrl + '/' + contentId, null).then(data => {
      if (data&&data!=null) {
        if (data.result && data.result!=null) {
          let contentInfo: ContentInfoModel;
          contentInfo = data.result;
          return contentInfo;
        }
      } else {
        // alert("数据获取失败，请稍后重试");
      }

    });
  }

}
