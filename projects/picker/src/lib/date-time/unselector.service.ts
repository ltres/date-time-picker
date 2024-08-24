import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnselectorService {

  private _unselect$: Subject<boolean> = new Subject();

  getUnselect$(): Observable<boolean>{
    return this._unselect$
  }

  setUnselect$(v: boolean){
    this._unselect$.next(v);
  }

  constructor(){

  }
}
