import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IComments} from '../interfaces/IComments';
import {urls} from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IComments[]> {
    return this.http.get<IComments[]>(urls.comments.base);
  }

  getById(id: string): Observable<IComments> {
    return this.http.get<IComments>(urls.comments.base + '/' + id);
  }
}
