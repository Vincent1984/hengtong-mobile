import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class ColumnInfoService {

  apiUrl: string;
  pageSize: any;
  pageNum: any;

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://192.168.2.7:8080/web/commonContent/list';
    this.pageSize = 10;
    this.pageNum = 1;
  }

  list(columnId, pageNum) {
    if (pageNum) {
      this.pageNum = pageNum;
    }
    return this.resourceService.doGet(this.apiUrl + '/' + this.pageSize + '/' + this.pageNum, null);
  }

}