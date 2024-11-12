import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { GuestOrder } from 'src/app/models/guestorder.model';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  requestOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
  };

  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

  constructor(private http: HttpClient) {
   }

  async getMenuItems() : Promise<Product[]> {
    const result2: Product[] = [];
    this.http.get<Product[]>("https://localhost:44375/api/menu/getmenuitems/").pipe(catchError(this.reportError))
    .subscribe(data => {
      data.forEach(x => {
        result2.push(x)
      })
    });
    return result2;
  }

  getTags() : string[] {
    const result2: string[] = [];
    this.http.get<string[]>("https://localhost:44375/api/menu/gettags")
      .subscribe(data => {
        data.forEach(x => {
          result2.push(x)
        })
    });
    return result2;
  }

  addGuestOrder = (order: GuestOrder) => {
    console.log(JSON.stringify(order))
    this.http.put("https://localhost:44375/api/order/AddOrder", JSON.stringify(order), {headers: this.httpHeaders} )
    .subscribe()
  }

  reportError(error: HttpErrorResponse, caught: Observable<Product[]>) {
    console.log(error.message)
    return throwError(() => new Error(`${error.message}, ${JSON.stringify(caught)}`))
  }
}
