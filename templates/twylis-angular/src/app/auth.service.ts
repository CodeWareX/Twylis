import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://twylis-server.herokuapp.com/api/register";
  private _loginUrl = "https://twylis-server.herokuapp.com/api/login";
  private _accountUrl = "https://twylis-server.herokuapp.com/api/account";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    localStorage.setItem('User email', user.email);
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getAccount() {
    return this.http.get<any>(this._accountUrl);
  }
}
