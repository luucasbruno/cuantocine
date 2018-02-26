import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class FilmService {
  film: any;
  
  constructor(private _http: Http) { }
  
  getFilm(id){
    
    return this._http.get("/film",{params: {id: id}})
      .map(result => this.film = result.json().data);
    
    
  }
}