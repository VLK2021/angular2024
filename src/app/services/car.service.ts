import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {ICar} from '../interfaces/car.interface';
import {urls} from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private trigger = new BehaviorSubject<boolean>(null) //для автооновлення після створення нового авто
  private carForUpdate = new BehaviorSubject<ICar>(null)

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.http.get<ICar[]>(urls.cars.base)
  }
  create(data: ICar): Observable<ICar> {
    return this.http.post<ICar>(urls.cars.base, data)
  }
  updateById(id: number, data: ICar): Observable<ICar> {
    return this.http.put<ICar>(urls.cars.byId(id), data)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(urls.cars.byId(id))
  }


  getTriggerStatus(): Observable<boolean> {
    return this.trigger.asObservable()
  }
  setTrigger(): void {
    this.trigger.next(!this.trigger.value)
  }


  getCarForUpdate(): Observable<ICar>{
    return this.carForUpdate.asObservable()
  }
  setCarForUpdate(data:ICar):void {
    this.carForUpdate.next(data)
  }
}
