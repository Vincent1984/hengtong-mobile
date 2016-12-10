import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class VersionService {

  apiUrl: string;

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/users/checkVersion';
  }


  getVersion(versionInfo) {
    return this.resourceService.doGet(this.apiUrl, versionInfo);
  }

}
