export class PagingModel<T> {

  dataCounts: number;
  result: Array<T>;

  constructor(public reqCount: number, public startIndex: number) {
  }

  public refresh(dataCounts, result) {
    if (result && 0 < result.length) {
      this.startIndex = dataCounts + this.startIndex;
      this.result = result;
    }
    return this;
  }

}

