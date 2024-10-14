import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urls} from '../constants/urls';
import {UserInterfaces} from '../interfaces/user-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll():Observable<UserInterfaces[]>{
    return this.http.get<UserInterfaces[]>(urls.users.base)
  }

  getById(id: number): Observable<UserInterfaces> {
    return this.http.get<UserInterfaces>(urls.users.byId(id));
  }
}
