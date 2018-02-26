import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class PostService {
  result: any;
  
  constructor(private _http: Http) { }
  
  getPost(id){
    return this._http.get("/post",{params: {id: id}})
        .map(result => this.result = result.json().data);
        
  }
}