import { PagingModel } from '../../models/paging-model';

export class BusinessService<T> {

  pagingMap: Map<string, PagingModel<T>>;

  constructor() {
    this.pagingMap = new Map();
  }

  protected getPagingModel(columnId) {
    let pagingModel = this.pagingMap.get(columnId);
    if (!pagingModel) {
      pagingModel = new PagingModel<T>(50, 1);
      this.pagingMap.set(columnId, pagingModel);
    }
    return pagingModel;
  }

  restoration(columnId) {
    this.pagingMap.delete(columnId)
  }

}
