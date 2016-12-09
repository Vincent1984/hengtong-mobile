import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class ColumnInfoService {

  apiUrl: string;

  constructor(private resourceService: ResourceService) {
  }

}
