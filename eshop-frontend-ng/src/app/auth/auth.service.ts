import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';
  tokenKey: string = 'cms-nestjs';
  private token = '';

  constructor(private http: HttpClient  ) { }

  register(credentials: any) {
    const fullUrl = `${this.baseUrl}/register`;
    this.http
      .post<any>(fullUrl, credentials)
      .subscribe(createdUser => {
        console.log('createdUser : ', createdUser);
      });
  }

  login(credentials: any) {
    const fullUrl = `http://localhost:3000/auth/login`;
    this.http
      .post<any>(fullUrl, credentials)
      .subscribe(token => {
        console.log('token', token);
        this.token = token.access_token;
        localStorage.setItem(this.tokenKey, token.access_token);
      })
  }

  decodePayloadToken(token: any) {
    const payload = JSON.parse(atob(this.token.split('.')[1]));
    console.log('payload', payload);
    return payload;
  }
  get isAdmin() {
    if (!this.token) {
      return false;
    }
    const payload = this.decodePayloadToken(this.token);
    return payload.role === 'admin';
  }
}
