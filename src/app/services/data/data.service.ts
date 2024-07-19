import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cocktail } from 'src/app/models/cocktail.model';
import { Observable, catchError, throwError } from 'rxjs';
import { __values } from 'tslib';
import { GuestOrder } from 'src/app/models/guestorder.model';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});
  
  //return this.http.get(this.heroesUrl, requestOptions)

  constructor(private http: HttpClient) {
   }

  getMenuItems() : Cocktail[] {
    let result2: Cocktail[] = [];
    var result = this.http.get<Cocktail[]>("https://localhost:44375/api/menu/GetMenuItems").pipe(catchError(this.reportError))
    
    result.subscribe(data => {
      data.forEach(x => {
        result2.push(x)
      })
      return result2;
    });
    return result2;
  }

  addGuestOrder(order: GuestOrder) {
    var result = this.http.put<any>("https://localhost:44375/api/order/AddOrder", JSON.stringify(order), {headers: this.httpHeaders} )
    .subscribe()
  }

  reportError(error: HttpErrorResponse, caught: Observable<Cocktail[]>) {
    alert(error.message)
    return throwError(() => new Error(error.message))
  }
}
