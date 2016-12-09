export class PagingModel<T> {

  dataCounts: number;
  result: Array<T>;

  constructor(public reqCount: number, public startIndex: number) {
  }

  public refresh(dataCounts, result) {
    this.startIndex = dataCounts + this.startIndex + 1;
    this.result = result;
    return this;
  }

}

