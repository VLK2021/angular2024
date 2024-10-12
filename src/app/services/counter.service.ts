import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
count = new BehaviorSubject<number>(0)

  constructor() { }

}
