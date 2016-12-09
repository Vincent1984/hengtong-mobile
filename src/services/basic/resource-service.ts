import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourceService {

  constructor(private http: Http) {
  }

  public doGet(url: string, query: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url + this.queryToString(query), options)
                    .toPromise()
                    .then(res => res.json())
                    .then(data => {
                      if (0 == data.errorCode) {
                        return data;
                      } else {
                        console.log('the error info is ' + data.errorMsg);
                      }
                    })
                    .catch(err => {
                      this.handleError(err);
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
                      if (0 == data.errorCode) {
                        return data;
                      } else {
                        console.log('the error info is ' + data.errorMsg);
                      }
                    })
                    .catch(err => {
                      this.handleError(err);
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
                      if (0 == data.errorCode) {
                        return data;
                      } else {
                        console.log('the error info is ' + data.errorMsg);
                      }
                    })
                    .catch(err => {
                      this.handleError(err);
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
                      if (0 == data.errorCode) {
                        return data;
                      } else {
                        console.log('the error info is ' + data.errorMsg);
                      }
                    })
                    .catch(err => {
                      this.handleError(err);
                    });
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

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



}
