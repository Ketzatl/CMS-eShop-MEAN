import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

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
        // localStorage.setItem();
      })
  }
}
