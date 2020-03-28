import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string, tenantAlias: string) : Observable<User> {
    const userCredentials = {
      username,
      password,
      tenantAlias
    };
    return this.http.post<User>('http://localhost:8080/v1/authentication/login', userCredentials);
  }
}
