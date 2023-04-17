import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { API_ROOT_URL } from '../app.config';
import { LoginRequestBody, LoginResponse, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = API_ROOT_URL + '/login';

  constructor(private http: HttpClient) {}

  private requestToken(body: LoginRequestBody): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, body);
  }

  login(body: LoginRequestBody) {
    const request = this.requestToken(body);
    return request.pipe(
      tap((value) => {
        const { token } = value;
        localStorage.setItem('token', token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getUser(): User | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return jwtDecode(token) as User;
  }
}
