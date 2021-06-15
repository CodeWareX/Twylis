import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private _searchUrl = 'https://twylis-app.herokuapp.com/search?keyword=';

  constructor(private http: HttpClient) { }

  searchKeyword(keyword: String) {
    this._searchUrl = 'https://twylis-app.herokuapp.com/search?keyword=' + keyword.trim();
    return this.http.get<any>(this._searchUrl);
  }

  searchKeywordSummary() {
    this._searchUrl = 'https://twylis-app.herokuapp.com/summary';
    return this.http.get<any>(this._searchUrl);
  }
}
