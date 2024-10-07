import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urls} from '../constants/urls';
import {IPost} from '../interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts.base);
  }
}
