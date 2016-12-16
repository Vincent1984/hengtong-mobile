import { Injectable } from '@angular/core';

import { ResourceService } from '../basic/resource-service';
import {Constants} from "../constants/constants";

@Injectable()
export class VersionInfoService {

  apiUrl: string;

  constructor(private resourceService: ResourceService) {
    this.apiUrl =  Constants.VERSION_URL;
  }


  getVersion(versionInfo) {
    return this.resourceService.doGet(this.apiUrl, versionInfo);
  }

}
