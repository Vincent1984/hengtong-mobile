import { Injectable } from '@angular/core';
import {  } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

import { ContentInfoModel } from "../../models/content-info-model";
import { PagingModel } from "../../models/paging-model";

import { BusinessService } from '../basic/business-service';
import {Constants} from "../constants/constants";
import {ColumnInfoModel} from "../../models/column-info-model";

@Injectable()
export class TrainingInfoService extends BusinessService<ContentInfoModel> {

  apiUrl: string;
  // detailUrl: string;
  pagingModel: PagingModel<ContentInfoModel>;
  imgQuery: {};
  allQuery: {};
  columnId: string;

  constructor(private resourceService: ResourceService) {
    super();
    this.apiUrl = Constants.TRAINGING_URL;
    this.pagingModel = new PagingModel<ContentInfoModel>(20, 1);
    this.imgQuery = { 'isImag': 1 };
    this.allQuery = { 'isImag': 0 };
    this.columnId = ColumnInfoModel.PXTZ_ID;
  }

  /**
   * 置顶查询
   */
  topList(count) {
    return this.resourceService.doGet(this.apiUrl + '/'+ this.columnId + '/' + count + '/' + 1, this.allQuery).then(data => {
      if (data&&data!=null&&data.result) {
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

  /**
   * 分页查询
   */
  findPaging(){
    let pagingModel = this.getPagingModel(this.columnId);
    return this.resourceService.doGet(this.apiUrl + '/'+ this.columnId + '/' + pagingModel.reqCount + '/' + pagingModel.startIndex, this.allQuery).then(data => {
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

    // getDetail(contentId){
    //   return this.resourceService.doGet(this.detailUrl + '/' + contentId, null).then(data => {
    //     if (data&&data.result) {
    //       let contentInfo: ContentInfoModel;
    //       contentInfo = data.result;
    //       return contentInfo;
    //     }
    //   });
    // }

}
