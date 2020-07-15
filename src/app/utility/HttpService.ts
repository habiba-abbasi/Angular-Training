import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {
 public baseUrl;
  constructor(private http: HttpClient) {
    this.baseUrl = "https://reqres.in/api/"
   }
  register(user: User) : Observable<any> {
    return this.http.post(`${this.baseUrl}register`, user);
 }
  login(username, password) : Observable<any>{
    return this.http.post(`${this.baseUrl}login` , { username, password });
  }
  getAll(pgNo: number) {
    return this.http.get<User[]>(`${this.baseUrl}users?page=${pgNo}`);
  }
  getSingle(id: number){
    return this.http.get(`${this.baseUrl}users/${id}`);
  }
}
