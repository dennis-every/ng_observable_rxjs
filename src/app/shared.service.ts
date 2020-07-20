import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSource = new BehaviorSubject({name: 'Maradona'});
  currentData = this.dataSource.asObservable();

  constructor() { }


  changeData(data: any): void {
    this.dataSource.next(data);
  }




}
