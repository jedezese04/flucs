import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { API_ROOT_URL } from '../app.config';
import { LoginRequestBody, LoginResponse, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = API_ROOT_URL + '/login';
  private tokenKey = 'token';
  private _user$ = new BehaviorSubject<User | null>(null);
  user = this._user$.asObservable();

  constructor(private http: HttpClient) {}

  private requestToken(body: LoginRequestBody): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, body);
  }

  private extractUser(token: string): User {
    return jwtDecode(token) as User;
  }

  init() {
    const token = localStorage.getItem(this.tokenKey)
    if(token) this._user$.next(this.extractUser(token))
  }

  login(body: LoginRequestBody) {
    const request = this.requestToken(body);
    request.subscribe((value) => {
      const { token } = value;
      localStorage.setItem(this.tokenKey, token);
      this._user$.next(this.extractUser(token));
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._user$.next(null);
  }
}
