import { Injectable } from '@angular/core';
import {  } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

import { ContentInfoModel } from "../../models/content-info-model";
import { PagingModel } from "../../models/paging-model";

@Injectable()
export class ContentInfoService {

  apiUrl: string;
  pagingModel: PagingModel<ContentInfoModel>;

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/commonContent/list';
    this.pagingModel = new PagingModel<ContentInfoModel>(50, 1);
  }

  topList(columnId, count) {
    return this.resourceService.doGet(this.apiUrl + '/' + columnId + '/' + count + '/' + 1, null).then(data => {
      if (data.result) {
        let contentInfos: Array<ContentInfoModel>;
        contentInfos = [];
        for (let i in data.result) {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, data.result[i]);
          contentInfos.push(contentInfo);
        }
        return contentInfos;
      }
    });
  }

  list(columnId) {
    return this.resourceService.doGet(this.apiUrl + '/' + columnId + '/' + this.pagingModel.reqCount + '/' + this.pagingModel.startIndex, null).then(data => {
      if (data.result) {
        let contentInfos: Array<ContentInfoModel>;
        contentInfos = [];
        for (let i in data.result) {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, data.result[i]);
          contentInfos.push(contentInfo);
        }
        return this.pagingModel.refresh(data.dataCounts, contentInfos);
      }
    });
  }

}
