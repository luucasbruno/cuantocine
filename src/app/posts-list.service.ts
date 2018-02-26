import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsListService {
  result: any;
  
  constructor(private _http: Http) { }
  
  getPosts(){
    return this._http.get("/posts")
      .map(result => this.result = result.json().data)
  }
}
