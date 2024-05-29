import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cocktail } from 'src/app/models/cocktail.model';
import { Observable, catchError, throwError } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
   }

  getMenuItems() : Cocktail[] {
    let result2: Cocktail[] = [];
    var result = this.http.get<Cocktail[]>("http://localhost/api/menu/GetMenuItems").pipe(catchError(this.reportError))
    
    result.subscribe(data => {
      data.forEach(x => {
        result2.push(x)
      })
      return result2;
    });
    return result2;
  }

  reportError(error: HttpErrorResponse, caught: Observable<Cocktail[]>) {
    alert(error.message)
    return throwError(() => new Error(error.message))
  }
}
