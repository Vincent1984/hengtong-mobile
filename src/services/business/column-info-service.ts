import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class ColumnInfoService {

  apiList: string;
  pageSize: any;
  pageNum: any;
  apiDetail: string;
  detailId: any;

  constructor(private resourceService: ResourceService) {
    this.apiList = 'http://218.61.0.14:8080/dlqzysgweb/web/commonContent/list';
    this.pageSize = 10;
    this.pageNum = 1;
    this.apiDetail = 'http://218.61.0.14:8080/dlqzysgweb/web/commonContent/detail';

  }

  list(columnId, pageNum) {
    if (pageNum) {
      this.pageNum = pageNum;
    }
    return this.resourceService.doGet(this.apiList + '/' + this.pageSize + '/' + this.pageNum, null);
  }

  detail(detailId) {
    if (detailId) {
      this.detailId = detailId;
    }
    return this.resourceService.doGet(this.apiDetail + '/' + this.detailId, null);
  }

}
