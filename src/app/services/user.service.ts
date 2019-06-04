import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.interface';
import { Observable, observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../_models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.baseApiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    return this.http.get(this.url + 'users');
  }

  getposts(id): Observable<any> {
    // return this.http.get(`${this.url}/posts?userId=${id}`);
    return this.http.get(this.url + 'posts?userId=' + id);
  }

  getPostComments(id): Observable<any> {
    return this.http.get(this.url + 'comments?postId=' + id)
  }
}
