import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import {AlertController} from "ionic-angular";

@Injectable()
export class ResourceService {

  constructor(private http: Http,private alertCtrl: AlertController) {
  }

  public doGet(url: string, query: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url + this.queryToString(query), options)
                    .toPromise()
                    .then(res => res.json())
                    .then(data => {
                      if (data && 0 == data.errorCode) {
                        return data;
                      } else if (data && 0 != data.errorCode)  {
                        this.showAlert("小编没有获取到数据哦@_@"+data.errorMsg);
                        console.log('the error info is ' + data.errorMsg);
                      } else {
                        this.showAlert("接口出现异常情况，请联系管理员");
                      }
                    })
                    .catch(err => {
                      console.log('the error info is ' + err);
                      //this.handleError(err);
                    });
  }

  public doPost(url: string, body: any, query: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url + this.queryToString(query), body, options)
                    .toPromise()
                    .then(res => res.json())
                    .then(data => {
                      if (data && 0 == data.errorCode) {
                        return data;
                      } else if (data && 0 != data.errorCode)  {
                        this.showAlert("小编发送有点问题哦@_@"+data.errorMsg);
                        console.log('the error info is ' + data.errorMsg);
                      } else {
                        this.showAlert("接口出现异常情况，请联系管理员");
                      }
                    })
                    .catch(err => {
                      //this.handleError(err);
                    });
  }

  public doPut(url: string, body: any, query: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.put(url + this.queryToString(query), body, options)
                    .toPromise()
                    .then(res => res.json())
                    .then(data => {
                      if (data && 0 == data.errorCode) {
                        return data;
                      } else if (data && 0 != data.errorCode)  {
                        this.showAlert("小编发送有点问题哦@_@"+data.errorMsg);
                        console.log('the error info is ' + data.errorMsg);
                      } else {
                        this.showAlert("接口出现异常情况，请联系管理员");
                      }
                    })
                    .catch(err => {
                      //this.handleError(err);
                    });
  }

  public doDelete(url: string, query: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(url + this.queryToString(query), options)
                    .toPromise()
                    .then(res => res.json())
                    .then(data => {
                      if (data && 0 == data.errorCode) {
                        return data;
                      } else if (data && 0 != data.errorCode)  {
                        this.showAlert("小编发送有点问题哦@_@"+data.errorMsg);
                        console.log('the error info is ' + data.errorMsg);
                      } else {
                        this.showAlert("接口出现异常情况，请联系管理员");
                      }
                    })
                    .catch(err => {
                      //this.handleError(err);

                    });
  }

  // private handleError(error: Response) {
  //   console.log(error);
  //   return Observable.throw(error.json().error || 'Server Error');
  // }

  private queryToString(query: any) {
    let str = '?';
    if (query) {
      for (var k in query) {
        str += k + '=' + query[k] + '&';
      }
      str = str.slice(0, -1);
    }
    return str;
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: '信息提示',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


}
