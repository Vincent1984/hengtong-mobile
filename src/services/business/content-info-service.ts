import { Injectable } from '@angular/core';

import { BusinessService } from '../basic/business-service';
import { ResourceService } from '../basic/resource-service';

import { ContentInfoModel } from '../../models/content-info-model';
import { PagingModel } from '../../models/paging-model';

@Injectable()
export class ContentInfoService extends BusinessService<ContentInfoModel> {

  listUrl: string;
  detailUrl: string;

  constructor(private resourceService: ResourceService) {
    super();
    this.listUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/commonContent/list';
    this.detailUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/commonContent/detail';
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
      if (data.result) {
        let contentInfo: ContentInfoModel;
        contentInfo = data.result;
        return contentInfo;
      }
    });
  }

}
