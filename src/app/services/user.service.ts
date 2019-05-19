import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }
  
  getUser(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
