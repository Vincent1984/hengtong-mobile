import { Injectable } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

@Injectable()
export class MessageService {

  apiUrl: string;

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/users/feedBack';
  }


  send(messageInfo) {
    return this.resourceService.doPost(this.apiUrl, null, messageInfo);
  }

}
